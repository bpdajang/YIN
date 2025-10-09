import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import User from "../Models/User.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { auth, admin } from "../middleware/auth.js";

const router = express.Router();

// User Signup
router.post(
  "/signup",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password, role } = req.body;

      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create new user
      const newUser = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role,
      });

      if (newUser) {
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        });
      } else {
        return res.status(400).json({ message: "Failed to create user" });
      }
    } catch (err) {
      res.status(500).send(errors || "Server error");
      console.error(err.message);
    }
  }
);

// User Login
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "10d",
      });

      res.cookie("jwt", token, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      });

      res.status(201).json({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        studentRef: user.studentRef,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// User Logout
router.post("/logout", (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    secure: true, // must be true in production
    sameSite: "none", // required for cross-site cookies
    path: "/", // important: must match path used when setting
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logout successful" });
});

// Get User Info
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get All Users (Admin only)
router.get("/all", auth, admin, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(
      users.map((user) => ({
        ...user._doc,
        createdAt: user.createdAt,
      }))
    );
  } catch (err) {
    res.status(500).send("Server error");
  }
});

export default router;

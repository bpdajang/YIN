import jwt from "jsonwebtoken";
import User from "../Models/User.js";

export const auth = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);
    console.log("Headers x-auth-token:", req.headers["x-auth-token"]);
    const token = req.headers["x-auth-token"] || req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorised: no Token" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        error: "Unauthorised: invalid Token",
        details: err.message,
      });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Unauthorised: no user found" });
    }

    req.user = { id: decoded.userId };
    req.user.role = user.role; // Add user role to req.user
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err });
  }
};

export const admin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};

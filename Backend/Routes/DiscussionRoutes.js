import express from "express";
import Discussions from "../Models/Discussions.js";
import { auth, admin } from "../middleware/auth.js";

const router = express.Router();

router.post("/test", (req, res) => {
  res.json({ message: "Discussion router is working" });
});

// GET all discussions
router.get("/", async (req, res) => {
  try {
    const discussions = await Discussions.find().lean();
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST: Add a new discussion (admin only)
router.post("/add", auth, admin, async (req, res) => {
  try {
    const { title, category, videoUrl } = req.body;
    if (!title || !category || !videoUrl) {
      return res
        .status(400)
        .json({ message: "Title, category, and videoUrl are required" });
    }
    const newDiscussion = await Discussions.create({
      title,
      category,
      videoUrl,
    });
    res.status(201).json(newDiscussion);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add discussion", error: error.message });
  }
});

// PUT: Update a discussion (admin only)
router.put("/update/:id", auth, admin, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, videoUrl } = req.body;
    const updatedDiscussion = await Discussions.findByIdAndUpdate(
      id,
      { title, category, videoUrl },
      { new: true },
    );
    if (!updatedDiscussion) {
      return res.status(404).json({ message: "Discussion not found" });
    }
    res.json(updatedDiscussion);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update discussion", error: error.message });
  }
});

// DELETE: Remove a discussion (admin only)
router.delete("/delete/:id", auth, admin, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Discussions.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Discussion not found" });
    }
    res.json({ message: "Discussion deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete discussion", error: error.message });
  }
});

export default router;

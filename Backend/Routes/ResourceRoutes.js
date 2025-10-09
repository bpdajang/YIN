import express from "express";
import multer from "../middleware/multer.js";
import Resource from "../Models/ResourceModel.js";
import { auth, admin } from "../middleware/auth.js";

const router = express.Router();
const upload = multer;

// GET all resources grouped by category
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find().lean();
    const grouped = resources.reduce((acc, item) => {
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});
    res.json(grouped);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET: Download file by ID
router.get("/download/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findById(id);
    if (!resource || !resource.fileData) {
      return res.status(404).json({ message: "File not found" });
    }
    res.set("Content-Type", resource.fileType);
    res.set(
      "Content-Disposition",
      `attachment; filename="${resource.fileName}"`
    );
    res.send(resource.fileData);
  } catch (error) {
    res.status(500).json({ message: "Download failed", error: error.message });
  }
});

// POST: Add a new resource (admin only)
router.post("/add", auth, admin, upload.single("file"), async (req, res) => {
  try {
    const { category, name, description, link } = req.body;

    if (req.file) {
      const newResource = await Resource.create({
        category,
        name,
        description,
        fileData: req.file.buffer,
        fileName: req.file.originalname,
        fileType: req.file.mimetype,
      });
      res.status(201).json(newResource);
    } else {
      const newResource = new Resource({
        category,
        name,
        description,
        ...(link && { link }),
      });

      await newResource.save();
      res.status(201).json(newResource);
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
});

// PUT: Update a resource by ID
router.put("/:id", auth, admin, async (req, res) => {
  try {
    const updated = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Resource not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error.message });
  }
});

// DELETE: Remove a resource
router.delete("/:id", auth, admin, async (req, res) => {
  try {
    const deleted = await Resource.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Resource not found" });
    res.json({ message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
});

export default router;

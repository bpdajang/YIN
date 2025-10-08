import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["templates", "eLearning", "references", "faqs", "forums"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // For templates: file data
    fileData: {
      type: Buffer,
    },
    fileName: {
      type: String,
    },
    fileType: {
      type: String,
    },
    // For eLearning, references, forums, partners, stories: external link
    link: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resource", resourceSchema);

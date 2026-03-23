import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Leadership",
        "Entrepreneurship",
        "Community",
        "Peacebuilding",
        "Innovation",
        "Education",
      ],
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Discussion", discussionSchema);

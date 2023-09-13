import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    professor: {
      type: mongoose.Types.ObjectId,
      ref: "Professor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);

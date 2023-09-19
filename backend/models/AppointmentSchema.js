import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    professor: {
      type: mongoose.Types.ObjectId,
      ref: "Professor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reserva", appointmentSchema);

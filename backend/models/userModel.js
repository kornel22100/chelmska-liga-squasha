// DONE
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    resetLink: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);

// DONE
import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    isRanking: { type: Boolean, required: true },
    users: [{ name: { type: String }, points: { type: Number } }],
    games: {
      places: [
        {
          users: [{ type: String }],
          factors: [{ type: String }],
          sets: [{ type: Number }],
          scores: [{ type: Number }],
        },
      ],
      ladder: [
        {
          id: { type: String },
          users: [{ type: String }],
          factors: [{ type: String }],
          sets: [{ type: Number }],
          scores: [{ type: Number }],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tournament", tournamentSchema);

// DONE
import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    league: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    season: { type: String, required: true },
    isRanking: { type: Boolean, required: true },
    users: [{ name: { type: String }, games: { type: Number }, wins: [{ type: String }], points: { type: Number }, smallPoints: { type: Number } }],
    games: [
      {
        users: [{ type: String }],
        sets: [{ type: Number }],
        points: [{ type: Number }],
        scores: [{ type: Number }],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Group", groupSchema);

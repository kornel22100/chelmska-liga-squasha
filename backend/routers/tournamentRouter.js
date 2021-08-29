// DONE
import data from "../data.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";

import Tournament from "../models/tournamentModel.js";

const tournamentRouter = express.Router();

tournamentRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Tournament.deleteMany();
    const createdTournaments = await Tournament.insertMany(data.tournaments);
    res.send({ createdTournaments });
  })
);

tournamentRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const data = {
      tournaments: await Tournament.distinct("name"),
    };

    data.tournament = data.tournaments.includes(req.body.name) ? req.body.name : data.tournaments[0];
    const tournament = await Tournament.findOne({ name: data.tournament });
    res.send({ ...data, users: tournament.users, games: tournament.games });
  })
);

export default tournamentRouter;

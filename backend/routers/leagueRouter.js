// DONE
import data from "../data.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";

import Group from "../models/groupModel.js";

const leagueRouter = express.Router();

leagueRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Group.deleteMany();
    const createdGroups = await Group.insertMany(data.groups);
    res.send({ createdGroups });
  })
);

leagueRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const data = {
      seasons: await Group.distinct("season"),
    };

    data.season = data.seasons.includes(req.body.season) ? req.body.season : data.seasons[0];
    data.leagues = await Group.findOne({ season: data.season }).distinct("league");
    data.league = data.leagues.includes(req.body.league) ? req.body.league : data.leagues[0];
    data.groups = await Group.findOne({ season: data.season, league: data.league }).distinct("name");
    data.group = data.groups.includes(req.body.group) ? req.body.group : data.groups[0];
    const group = await Group.findOne({ season: data.season, league: data.league, name: data.group });
    res.send({ ...data, users: group.users, games: group.games });
  })
);

export default leagueRouter;

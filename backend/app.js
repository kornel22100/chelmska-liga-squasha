// DONE
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";

import articleRouter from "./routers/articleRouter.js";
import leagueRouter from "./routers/leagueRouter.js";
import tournamentRouter from "./routers/tournamentRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/squash", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);
app.use("/api/articles", articleRouter);
app.use("/api/leagues", leagueRouter);
app.use("/api/tournaments", tournamentRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

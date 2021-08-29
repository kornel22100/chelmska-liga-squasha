// DONE
import data from "../data.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";

import Article from "../models/articleModel.js";

const articleRouter = express.Router();

articleRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const articles = await Article.find({}, { image: 1, title: 1 });
    res.send(articles);
  })
);

articleRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Article.deleteMany({});
    const createdArticles = await Article.insertMany(data.articles);
    res.send({ createdArticles });
  })
);

articleRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id, { image: 1, title: 1, date: 1, text: 1 });
    if (article) {
      res.send(article);
    } else {
      res.status(404).send({ message: "Nie znaleziono artykułu" });
    }
  })
);

export default articleRouter;

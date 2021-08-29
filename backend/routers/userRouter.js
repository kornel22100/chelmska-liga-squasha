// DONE
import data from "../data.js";
import { generateToken, isAuth } from "../utils.js";

import bcrypt from "bcryptjs";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin, token: generateToken(user, "30d") });
        return;
      }
    }
    res.status(401).send({ message: "Niepoprawny email lub hasło" });
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin, token: generateToken(user, "30d") });
    } else {
      res.status(404).send({ message: "Konto nie istnieje" });
    }
  })
);

userRouter.put(
  "/account",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser, "30d"),
      });
    }
  })
);

userRouter.post(
  "/forget-password",
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "20m" });
      await user.updateOne({ resetLink: token });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "kornel.kolodziejczyk.cv",
          pass: "_kornel.kolodziejczyk_CV",
        },
      });
      const mailOptions = {
        from: "Chełmska Liga Squasha",
        to: email,
        subject: "Chełmska Liga Squasha. Link do zresetowania hasła",
        html: `<h2>Wejdź w ciągu 20 minut w poniższy link aby zresetować hasło.</h2>
        <p><a href="${process.env.CLIENT_URL}/resetPassword/${token}">${process.env.CLIENT_URL}/resetPassword/${token}</p><a/>`,
      };
      await transporter.sendMail(mailOptions);
      res.send("Link do zresetowania hasła został wysłany na podany adres email.");
      return;
    } else {
      res.status(401).send({ message: "Użytkownik o podanym adresie email nie istnieje." });
    }
  })
);

userRouter.post(
  "/reset-password",
  expressAsyncHandler(async (req, res) => {
    const { password } = req.body;
    const resetLink = req.headers.authorization.split(" ")[1];
    if (resetLink) {
      try {
        await jwt.verify(resetLink, process.env.JWT_SECRET);
        const user = await User.findOne({ resetLink });
        await user.updateOne({ password: bcrypt.hashSync(password, 8), resetLink: "" });
        return res.status(200).json("Twoje hasło zostało zmienione.");
      } catch (err) {
        return res.status(401).json({ message: "Nieważny lub niepoprawny token." });
      }
    } else {
      return res.status(401).json({ message: "Błąd autoryzacji" });
    }
  })
);

export default userRouter;

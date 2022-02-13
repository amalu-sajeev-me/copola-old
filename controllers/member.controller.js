import { Member } from "../models/schemas/member.mongo.js";
import jwt from "jsonwebtoken";

const registerAccount = async (req, res) => {
  const user = new Member(req.body);
  await user.save();
  console.log(user);
  res.send("signup success");
};

const login = async (req, res) => {
  scream(404, "random error");
  const { username, _id } = req.user;
  const { API_TOKEN_SECRET } = process.env;
  const token = jwt.sign({ username, _id }, API_TOKEN_SECRET);
  console.log("your token:", token);
  res.send("this could be a secret");
};

export { registerAccount, login };

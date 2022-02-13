import { Member } from "../models/schemas/member.mongo.js";
import jwt from "jsonwebtoken";

const registerAccount = async (req, res) => {
  const successMsg = [true, `account registered succesfully`];

  const { body: memberDetails } = req;
  const member = new Member(memberDetails);
  await member.registerAccount();
  res.json(say(...successMsg));
};

const login = async (req, res) => {
  const { username, _id } = req.user;
  const { API_TOKEN_SECRET } = process.env;
  const token = jwt.sign({ username, _id }, API_TOKEN_SECRET);
  console.log("your token:", token);
  res.send("this could be a secret");
};

export { registerAccount, login };

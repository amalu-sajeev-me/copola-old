import mongoose from "mongoose";
import { MemberModel } from "../member.model.js";

const { Schema, model } = mongoose;

const memberSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  username: String,
  password: String,
});

memberSchema.loadClass(MemberModel);


const Member = model("Member", memberSchema);

export { Member };

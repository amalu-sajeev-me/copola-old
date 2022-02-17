import mongoose from "mongoose";
import { MemberModel } from "../member.model.js";

const {
  Schema,
  model,
  Types: { ObjectId },
} = mongoose;

const memberSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  username: String,
  password: String,
  reviews: {
    type: [ObjectId],
    ref: `Review`,
  },
});

memberSchema.loadClass(MemberModel);


const Member = model("Member", memberSchema);

export { Member };

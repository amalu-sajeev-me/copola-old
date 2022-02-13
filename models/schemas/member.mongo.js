import mongoose from "mongoose";

const { Schema, model } = mongoose;

const memberSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  username: String,
  password: String,
});

const Member = model("Member", memberSchema);

export { Member };

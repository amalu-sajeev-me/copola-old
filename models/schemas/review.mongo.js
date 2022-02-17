import mongoose from "mongoose";
import { Member } from "./member.mongo.js";
const { Schema, model } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const reviewSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: `Member`,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

const Review = model(`Review`, reviewSchema);

export { Review };
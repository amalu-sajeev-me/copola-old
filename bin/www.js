import dotenv from "dotenv";
import "../utils/globals.js";
import { connectMongo, startServer } from "../services/index.js";

const { NODE_ENV } = process.env;
NODE_ENV !== "production" && dotenv.config();

(await connectMongo()) && startServer();

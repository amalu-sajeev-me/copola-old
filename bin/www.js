import "dotenv/config";
import "../utils/globals.js";
import { connectMongo, startServer } from "../services/index.js";

(await connectMongo()) && startServer();

import express from "express";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { middlewares } from "./middlewares/index.js";
import { memberRouter } from "./routes/member.router.js";
import { Member } from "./models/schemas/member.mongo.js";
const app = express();

app.use(middlewares);
app.use("/member", memberRouter);





export { app };

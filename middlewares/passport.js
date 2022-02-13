import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Member } from "../models/schemas/member.mongo.js";

const { API_TOKEN_SECRET } = process.env;

const localStrategyOptions = {};
const localStrategy = new LocalStrategy(async (username, password, done) => {
  const user = await Member.findOne({ username });
  if (!user) return done(null, false, { message: "user not found" });
  if (password === user.password)
    return done(null, user, { message: "logged in" });
});

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: API_TOKEN_SECRET,
};
const jwtStrategy = new JwtStrategy(jwtStrategyOptions, jwtVerify);
function jwtVerify(jwtPayload, done) {
  Member.findById(jwtPayload).then((data) => done(null, data));
}

passport.use("login", localStrategy);
passport.use(jwtStrategy);

export { passport };

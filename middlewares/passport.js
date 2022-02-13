import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Member } from "../models/schemas/member.mongo.js";

const { API_TOKEN_SECRET } = process.env;

const localStrategyOptions = {};
const localStrategy = new LocalStrategy(localStrategyVerify);

async function localStrategyVerify(username, password, done) {
  const credentials = { username, password };
  const [isValid, user] = await Member.validateCredentials(credentials);
  const failureMsg = [null, false, { message: "inalid credentials" }];
  const successMsg = [null, user, { message: "succesfully logged in" }];

  return !isValid ? done(...failureMsg) : done(...successMsg);
}

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: API_TOKEN_SECRET,
};
const jwtStrategy = new JwtStrategy(jwtStrategyOptions, jwtStrategyVerify);

async function jwtStrategyVerify(jwtPayload, done) {
  const { _id: id } = jwtPayload;
  const user = await Member.findById(id);
  const successMsg = [null, user];
  const failureMsg = [null, false, { message: "please login first" }];
  return !user ? done(...failureMsg) : done(...successMsg);
}

passport.use("login", localStrategy);
passport.use(jwtStrategy);

export { passport };

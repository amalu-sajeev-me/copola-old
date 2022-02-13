import { Router } from "express";
import { registerAccount, login } from "../controllers/member.controller.js";
import { validateSignup } from "../models/schemas/member.schema.js";
import passport from "passport";

const memberRouter = Router();

memberRouter.post("/new", validateSignup, catchAsync(registerAccount));

memberRouter.post(
  "/login",
  passport.authenticate("login", { session: false }),
  catchAsync(login)
);

memberRouter.get(
  "/secret",
  passport.authenticate(`jwt`, { session: false }),
  (req, res) => {
    res.send("this is your secret");
  }
);

export { memberRouter };

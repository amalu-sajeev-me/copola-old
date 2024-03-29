import { Router } from "express";
import { registerAccount, login } from "../controllers/member.controller.js";
import { addReview } from "../controllers/review.controller.js";
import { reviewRouter } from "./review.router.js";
import {
  validateSignup,
  validateLogin,
} from "../models/schemas/member.schema.js";
import passport from "passport";

const memberRouter = Router();

memberRouter.use(`/`, reviewRouter);

memberRouter.post(
  "/new",
  catchAsync(validateSignup),
  catchAsync(registerAccount)
);

memberRouter.post(
  "/login",
  catchAsync(validateLogin),
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

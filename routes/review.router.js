import { Router } from "express";
import { addReview } from "../controllers/review.controller.js";

const reviewRouter = Router();

reviewRouter.route("/:username/review").post(catchAsync(addReview));

export { reviewRouter };

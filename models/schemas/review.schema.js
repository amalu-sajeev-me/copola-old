import Joi from "joi";

const reviewSchema = Joi.object({
  owner: Joi.string().required(),
  rating: Joi.string().required(),
  feedback: Joi.string().required(),
});

const validateReview = async (req, res, next) => {
  const { body: reviewDetails } = req;
  await reviewSchema.validateAsync(reviewDetails);
  next();
};

export { validateReview };

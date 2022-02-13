import Joi from "joi";

const memberSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(16).required(),
  lastName: Joi.string().alphanum().min(3).max(16).required(),
  email: Joi.string().email(),
  phone: Joi.string(),
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

const validateSignup = async (req, res, next) => {
  const { body: memberDetails } = req;
  await memberSchema.validateAsync(memberDetails);
  next();
};

export { validateSignup };
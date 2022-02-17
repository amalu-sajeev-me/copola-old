import { Member } from "../models/schemas/member.mongo.js";
import { Review } from "../models/schemas/review.mongo.js";

const addReview = async (req, res) => {
  const { body: reviewDetails } = req;
  const { username } = req.params;
  const nonExistingUser = [404, `user doesn't exist`];
  const user = await Member.findOne({ username });
  !user && scream(...nonExistingUser);
  const review = new Review({ ...reviewDetails, owner: user });
  user.reviews.push(review);
  await user.save();
  await review.save();
  res.send("new review added");
};

export { addReview };

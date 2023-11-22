import { getUserById } from "../service/index.js";

export const currentUser = async (req, res, next) => {
  const userId = res.locals.user._conditions._id;
  const user = await getUserById(userId);

  return res
    .status(200)
    .json([`email: ${user.email}`, `subscription: ${user.subscription}`]);
};

import { getUserById, updateUser } from "../../Services/index.js";

export const logout = async (req, res, next) => {
  const userId = res.locals.user._conditions._id;
  const user = await getUserById(userId);

  await updateUser(userId, { token: null });
  return res.status(200).json(user);
};

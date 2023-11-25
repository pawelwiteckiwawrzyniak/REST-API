import { updateUser } from "../../Services/index.js";

export const logout = async (req, res, next) => {
  const userId = res.locals.user._conditions._id;
  try {
    await updateUser(userId, { token: null });
    return res.status(204);
  } catch (error) {
    next(error);
  }
};

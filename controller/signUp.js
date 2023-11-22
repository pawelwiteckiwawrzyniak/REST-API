import { User } from "../service/schemas/user.js";

export const signup = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ message: "Email in use" });
  }
  try {
    const newUser = new User({ email, password, subscription });
    newUser.setPassword(password);
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

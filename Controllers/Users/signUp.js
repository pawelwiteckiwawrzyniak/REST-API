import { User } from "../../Services/Schemas/user.js";
import gravatar from "gravatar";
import { nanoid } from "nanoid";
import { sendEmailVerify } from "./sendEmailVerify.js";

export const signup = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  if (user) {
    return res.status(409).json({ message: "Email in use" });
  }
  try {
    const newUser = new User({
      email,
      password,
      subscription,
      avatarURL,
      verificationToken,
    });
    newUser.setPassword(password);
    await newUser.save();
    await sendEmailVerify(email, verificationToken);
    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

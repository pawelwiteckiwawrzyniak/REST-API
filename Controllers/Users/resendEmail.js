import { User } from "../../Services/Schemas/user.js";
import { updateUser } from "../../Services/index.js";
import { sendEmailVerify } from "./sendEmailVerify.js";
import { nanoid } from "nanoid";

export const resendEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "missing required field email" });
  }

  try {
    const user = await User.findOne({ email });
    if (user.verify) {
      return res
        .status(400)
        .json({ message: "Verification has already been passed" });
    }

    const token = nanoid();
    await updateUser(user.id, {
      verificationToken: token,
    });
    await sendEmailVerify(email, token);
    res.status(200);
  } catch (error) {
    console.log(error);
  }
};

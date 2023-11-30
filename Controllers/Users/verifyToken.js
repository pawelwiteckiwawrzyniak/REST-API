import { User } from "../../Services/Schemas/user.js";
import { updateUser } from "../../Services/index.js";

export const verifyToken = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken: verificationToken });
    const payload = {
      verificationToken: null,
      verify: true,
    };
    if (user) {
      await updateUser(user.id, payload);
      return res.status(200).json({ message: "Verification successful" });
    }
    res.status(404).json({ message: "Not found" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

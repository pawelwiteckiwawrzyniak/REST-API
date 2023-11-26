import { User } from "../../Services/Schemas/user";

export const verifyToken = async () => {
  try {
    const { verificationToken } = req.params;
    const user = User.findOne({ verificationToken: verificationToken });

    if (user) {
      user.verificationToken = null;
      user.verify = true;
      return res.status(200).json({ message: "Verification successful" });
    }
    res.status(404).json({ message: "Not found" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

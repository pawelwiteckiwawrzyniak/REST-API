import { User } from "../../Services/Schemas/user.js";
import jwt from "jsonwebtoken";
import { updateUser } from "../../Services/index.js";
import { configDotenv } from "dotenv";
configDotenv();

const secret = process.env.SECRET;

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.validPassword(password)) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  const updatedUser = await updateUser(user.id, { token });
  return res.status(200).json(updatedUser);
};

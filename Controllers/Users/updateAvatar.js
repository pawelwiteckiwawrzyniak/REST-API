import path from "path";
import { updateUser } from "../../Services/index.js";
import fs from "fs/promises";
import Jimp from "jimp";
import { User } from "../../Services/Schemas/user.js";

export const updateAvatar = async (req, res, next) => {
  const userId = res.locals.user._conditions._id;
  const user = await User.findById(userId);
  const storeImage = path.join(process.cwd(), "Public/Avatars");
  const { path: temporaryPath, originalname } = req.file;
  const fileName = `${user.email}.${originalname}`;
  const filePath = path.join(storeImage, fileName);

  try {
    const avatar = await Jimp.read(temporaryPath);
    await avatar.resize(250, 250).writeAsync(temporaryPath);
    await fs.rename(temporaryPath, filePath);

    const user = await updateUser(userId, {
      avatarURL: `http://localhost:3000/avatars/${fileName}`,
    });
    return res.status(200).json(`avatarURL: ${user.avatarURL}`);
  } catch (error) {
    console.log(error, next(error));
  }
};

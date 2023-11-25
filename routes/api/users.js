import express from "express";
import { signup } from "../../Controllers/Users/signUp.js";
import { login } from "../../Controllers/Users/logIn.js";
import { logout } from "../../Controllers/Users/logOut.js";
import { currentUser } from "../../Controllers/Users/currentUser.js";
import { updateAvatar } from "../../Controllers/Users/updateAvatar.js";
import { upload } from "../../Middlewares/Auth/uploadAvatar.js";
import { auth } from "../../Middlewares/Auth/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, currentUser);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

export { router };

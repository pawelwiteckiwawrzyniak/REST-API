import express from "express";
import { signup } from "../../Controllers/Users/signUp.js";
import { login } from "../../Controllers/Users/logIn.js";
import { logout } from "../../Controllers/Users/logOut.js";
import { currentUser } from "../../Controllers/Users/currentUser.js";
import { updateAvatar } from "../../Controllers/Users/updateAvatar.js";
import { upload } from "../../Middlewares/Auth/uploadAvatar.js";
import { auth } from "../../Middlewares/Auth/auth.js";
import { verifyToken } from "../../Controllers/Users/verifyToken.js";
import { resendEmail } from "../../Controllers/Users/resendEmail.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, currentUser);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);
router.get("/verify/:verificationToken", verifyToken);
router.post("/verify", resendEmail);

export { router };

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        phone:
 *          type: string
 *        favorite:
 *          type: boolean
 *      example:
 *        _id: 659adb9711d360947ef1028f
 *        name: ada
 *        email: ada@test.com
 *        phone: "1231231123"
 *        favorite: false
 */

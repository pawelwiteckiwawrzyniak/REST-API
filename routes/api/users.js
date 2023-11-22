import express from "express";
import { signup } from "../../controller/signUp.js";
import { login } from "../../controller/logIn.js";
import { auth } from "../../middleware/auth.js";
import { logout } from "../../controller/logOut.js";
import { currentUser } from "../../controller/currentUser.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", auth, logout);

router.get("/current", auth, currentUser);
export { router };

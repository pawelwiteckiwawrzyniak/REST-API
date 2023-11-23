import { Router } from "express";
import { router as contactsRouter } from "./contacts.js";
import { router as usersRouter } from "./users.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/contacts", contactsRouter);

export default router;

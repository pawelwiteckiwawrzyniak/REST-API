import express from "express";

import { get } from "../../controller/getAllContacts.js";
import { getById } from "../../controller/getContactById.js";
import { post } from "../../controller/createContact.js";
import { remove } from "../../controller/removeContact.js";
import { put } from "../../controller/updateContact.js";
import { patch } from "../../controller/contactFavorite.js";

const router = express.Router();

router.get("/", get);
router.get("/:contactId", getById);
router.post("/", post);
router.delete("/:contactId", remove);
router.put("/:contactId", put);
router.patch("/:contactId/favorite", patch);

export { router };

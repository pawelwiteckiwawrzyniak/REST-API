import express from "express";

import { get } from "../../Controllers/Contacts/getAllContacts.js";
import { getById } from "../../Controllers/Contacts/getContactById.js";
import { post } from "../../Controllers/Contacts/createContact.js";
import { remove } from "../../Controllers/Contacts/removeContact.js";
import { put } from "../../Controllers/Contacts/updateContact.js";
import { patch } from "../../Controllers/Contacts/contactFavorite.js";

const router = express.Router();

router.get("/", get);
router.get("/:contactId", getById);
router.post("/", post);
router.delete("/:contactId", remove);
router.put("/:contactId", put);
router.patch("/:contactId/favorite", patch);

export { router };

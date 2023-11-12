import express from "express";
import { nanoid } from "nanoid";
import Joi from "joi";

import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} from "../../models/contacts.js";

export const router = express.Router();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (contact !== undefined) {
    return res.status(200).json({ contact });
  }
  res.status(404).json({ message: "Not found" });
});

router.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;
  const validation = schema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({ message: "missing required name - field" });
  }
  const contact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  await addContact(contact);
  res.status(201).json(contact);
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await removeContact(contactId);
  if (contact === false) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ message: "contact deleted" });
});

router.put("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const validation = schema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({ message: "missing fields" });
  }
  const contact = await updateContact(contactId, req.body);
  if (contact === false) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(contact);
});

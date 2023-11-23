import { createContact } from "../../Services/index.js";

export const post = async (req, res, next) => {
  try {
    const contact = await createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

import { getAllContacts } from "../../Services/index.js";

export const get = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

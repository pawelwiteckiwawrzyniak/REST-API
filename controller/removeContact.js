import { removeContact } from "../service/index.js";

export const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await removeContact(contactId);
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

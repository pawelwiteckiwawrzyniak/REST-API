import { updateContact } from "../../Services/index.js";

export const put = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await updateContact(contactId, req.body);

    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

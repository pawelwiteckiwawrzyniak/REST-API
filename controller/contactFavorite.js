import { getContactById, updateStatusContact } from "../service/index.js";

export const patch = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await getContactById(contactId);

    if (contact.favorite === undefined) {
      return res.status(400).json({ message: "missing field favorite" });
    }
    if (!contact.favorite) {
      const isFavorite = true;
      const updatedContact = await updateStatusContact(contactId, isFavorite);
      return res.status(200).json(updatedContact);
    }
    if (contact.favorite) {
      return res.status(200).json(contact);
    }

    res.status(404).json({ message: "Not found" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

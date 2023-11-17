import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
  updateStatusContact,
} from "../service/index.js";

export const get = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (contact) {
      return res.status(200).json({ contact });
    }
    res.status(404).json({ message: "Not found" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const post = async (req, res, next) => {
  try {
    const contact = await createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

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

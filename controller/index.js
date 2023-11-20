import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
  updateStatusContact,
  createUser,
} from "../service/index.js";
import bcrypt from "bcryptjs";

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

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    /*   bcrypt.hash(password, 10, async function (hash) {
      const user = await createUser({ email, password });
      res.status(201).json(user);
    }); */
  } catch (error) {
    console.log(error);
    next(error);
  }
};

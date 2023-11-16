import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
} from "../service";

export const get = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (contact !== undefined) {
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
    const { name, email, phone } = req.body;
    /* const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(400).json({ message: "missing required name - field" });
    } */
    const contact = {
      name,
      email,
      phone,
    };
    await createContact(contact);
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    /* const contact = */ await removeContact(contactId);
    /* if (contact === false) {
      return res.status(404).json({ message: "Not found" });
    } */
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const put = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    /* const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(400).json({ message: "missing fields" });
    } */
    const contact = await updateContact(contactId, req.body);
    /* if (contact === false) {
      return res.status(404).json({ message: "Not found" });
    } */
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

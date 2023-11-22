/* import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
  updateStatusContact,
  updateUser,
} from "../service/index.js";
import { User } from "../service/schemas/user.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

const secret = process.env.SECRET; */

/* export const get = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    next(error);
  }
}; */

/* export const getById = async (req, res, next) => {
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
}; */

/* export const post = async (req, res, next) => {
  try {
    const contact = await createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
}; */

/* export const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await removeContact(contactId);
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    console.error(error);
    next(error);
  }
}; */

/* export const put = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await updateContact(contactId, req.body);

    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    next(error);
  }
}; */

/* export const patch = async (req, res, next) => {
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
}; */

/* export const signup = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ message: "Email in use" });
  }
  try {
    const newUser = new User({ email, password, subscription });
    newUser.setPassword(password);
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
}; */

/* export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.validPassword(password)) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  const updatedUser = await updateUser(user.id, { token });
  return res.status(200).json({ token, updatedUser });
}; */

/* export const logout = async (req, res, next) => {
  const { username } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      message: `Authorization was successful: ${username}`,
    },
  });
}; */

/* export const currentUser = async (req, res, next) => {
  const { _id } = req.user;
  const user = await User.findById(userId, {
    email: 1,
    subscription: 1,
    _id: 0,
  });

  return res.status(200).json({ user });
}; */

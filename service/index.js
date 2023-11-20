import { Contact } from "./schemas/contact.js";
import { User } from "./schemas/user.js";

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (id) => {
  return await Contact.findOne({ _id: id });
};

export const createContact = async (body) => {
  return await Contact.create(body);
};

export const updateContact = async (id, fields) => {
  return await Contact.findByIdAndUpdate(
    { _id: id },
    { $set: fields },
    { new: true }
  );
};

export const removeContact = async (id) => {
  return await Contact.deleteOne({ _id: id });
};

export const updateStatusContact = async (id, isFavorite) => {
  return await Contact.findByIdAndUpdate(
    { _id: id },
    { $set: { favorite: isFavorite } },
    { new: true }
  );
};

export const createUser = async (body) => {
  return await User.create(body);
};

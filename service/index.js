import { Contact } from "./schemas/contact";

export const getAllContacts = async () => {
  return Contact.find();
};

export const getContactById = (id) => {
  return Contact.findOne({ _id: id });
};

export const createContact = ({ contact }) => {
  return Contact.create({ contact });
};

export const updateContact = (id, fields) => {
  return Contact.findByIdAndUpdate(
    { _id: id },
    { $set: fields },
    { new: true }
  );
};

export const removeContact = (id) => {
  return Contact.findByIdAndRemove({ _id: id });
};

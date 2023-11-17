/* import fs from "fs/promises";
import path from "path";

const contactsPath = path.join(process.cwd(), "/models/contacts.json");

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact;
};

export const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );

  if (contacts.length === updatedContacts.length) {
    return false;
  }
  const newContactsList = await fs.writeFile(
    contactsPath,
    JSON.stringify(updatedContacts)
  );
  return newContactsList;
};

export const addContact = async (body) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  contacts.push(body);
  const addContact = await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return addContact;
};

export const updateContact = async (contactId, body) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contact = contacts.findIndex((contact) => contact.id === contactId);
  if (contact === -1) {
    return false;
  }
  contacts[contact].name = body.name;
  contacts[contact].email = body.email;
  contacts[contact].phone = body.phone;
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[contact];
};
 */

import express from "express";

import { get } from "../../Controllers/Contacts/getAllContacts.js";
import { getById } from "../../Controllers/Contacts/getContactById.js";
import { post } from "../../Controllers/Contacts/createContact.js";
import { remove } from "../../Controllers/Contacts/removeContact.js";
import { put } from "../../Controllers/Contacts/updateContact.js";
import { patch } from "../../Controllers/Contacts/contactFavorite.js";

const router = express.Router();

router.get("/", get);
router.get("/:contactId", getById);
router.post("/", post);
router.delete("/:contactId", remove);
router.put("/:contactId", put);
router.patch("/:contactId/favorite", patch);

export { router };

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        phone:
 *          type: string
 *        favorite:
 *          type: boolean
 *      example:
 *        _id: 659adb9711d360947ef1028f
 *        name: ada
 *        email: ada@test.com
 *        phone: "1231231123"
 *        favorite: false
 */

/**
 * @swagger
 * tags:
 *  name: Contacts
 */

/**
 * @swagger
 * /api/contacts:
 *  get:
 *    summary: Returns the list of all contacts
 *    tags: [Contacts]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *  get:
 *    summary: Returns the contact with a specified id
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /api/contacts:
 *  post:
 *    summary: Creates a contact
 *    tags: [Contacts]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *          example:
 *            name: Benjamin
 *            email: ben@10.cn
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *  delete:
 *    summary: Deletes the specified contact
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *  put:
 *    summary: Modifies a contact with a specified id
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the contact
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *          example:
 *            name: Madalene
 *            email: mad@20.ca
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /api/contacts/{id}/favorite:
 *  patch:
 *    summary: Adds the specified contact to favorites
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Contact'
 */

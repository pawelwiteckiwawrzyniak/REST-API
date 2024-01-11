import express from "express";
import { signup } from "../../Controllers/Users/signUp.js";
import { login } from "../../Controllers/Users/logIn.js";
import { logout } from "../../Controllers/Users/logOut.js";
import { currentUser } from "../../Controllers/Users/currentUser.js";
import { updateAvatar } from "../../Controllers/Users/updateAvatar.js";
import { upload } from "../../Middlewares/Auth/uploadAvatar.js";
import { auth } from "../../Middlewares/Auth/auth.js";
import { verifyToken } from "../../Controllers/Users/verifyToken.js";
import { resendEmail } from "../../Controllers/Users/resendEmail.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, currentUser);
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);
router.get("/verify/:verificationToken", verifyToken);
router.post("/verify", resendEmail);

export { router };

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        password:
 *          type: string
 *        email:
 *          type: string
 *        subscription:
 *          type: string
 *        avatarURL:
 *          type: string
 *        token:
 *          type: string
 *        verify:
 *          type: boolean
 *        verificationToken:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      example:
 *        _id: 659ada607c3662b6650892ca
 *        password: $2a$10$.ubVzcn1R3cbX.9447dQvu6UifCTMGXlrxR14SH..svA19BGiuVvS
 *        email: adam@test.com
 *        subscription: starter
 *        avatarURL: www.gravatar.com/avatar/1ed38cee3f00f445caa433c1907f557f
 *        token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWFkYTYwN2MzNjYyYjY2NTA4OTJjYSIsImVtYWlsIjoiYWRhbUB0ZXN0LmNvbSIsImlhdCI6MTcwNDY0NzY1NiwiZXhwIjoxNzA0NjUxMjU2fQ.JdMLZd-6FetDaMy5VSCgiE30-wxx3pWSNnYXtml59bA
 *        verify: false
 *        verificationToken: Wkp5LpTE7H19IeSOlwBCS
 *        createdAt: 2024-01-07T17:07:44.080Z
 *        updatedAt: 2024-01-07T17:14:16.348Z
 */

/**
 * @swagger
 * tags:
 *  name: Users
 */

/**
 * @swagger
 * /api/users/signup:
 *  post:
 *    summary: Registers a user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *          example:
 *            password: benjamin10
 *            email: ben10@test.com
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/users/login:
 *  post:
 *    summary: Logs in a user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *          example:
 *            password: madalene
 *            email: madalene@test.com
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/users/logout:
 *  get:
 *    summary: Logs out a user
 *    tags: [Users]
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: The token of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/users/current:
 *  get:
 *    summary: Gets info about current user
 *    tags: [Users]
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: The token of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                email:
 *                  type: string
 *                subscription:
 *                  type: string
 */

/**
 * @swagger
 * /api/users/avatars:
 *  patch:
 *    summary: Updates avatar
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        image/png:
 *          schema:
 *            type: string
 *    parameters:
 *      - in: header
 *        name: authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: The token of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 */

/**
 * @swagger
 * /api/users/verify/{verificationToken}:
 *  get:
 *    summary: Verifies a user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: vereificationToken
 *        schema:
 *          type: string
 *        required: true
 *        description: The verificationToken of the contact
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 */

/**
 * @swagger
 * /api/users/verify:
 *  post:
 *    summary: Resends verification email
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *          example:
 *            email: adam@test.com
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 */

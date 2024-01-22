# REST API for contact management - project

-  This is a backend application developed using Node.js and various middleware libraries. It facilitates the management of a contact database with features such as creating, deleting, modifying, and browsing contacts. The API also includes user authentication and authorization, utilizing JWT tokens, bcrypt for password hashing, and nodemailer for email verification. Additional functionalities include image processing using Jimp, automated email sending with Postmark, API documentation through Swagger, and development optimization with nodemon for automatic server restarting.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Project Features](#project-features)
- [Project Objectives](#project-objectives)
- [Setup](#setup)

## General Information

- This project is created to expand knowledge and gain
  experience in programming.

## Technologies Used:

- Node.js
- Express
- MongoDB and Mongoose
- Bcrypt
- Cors
- Gravatar
- Jimp
- JSON Web Token (JWT) and Passprt-JWT
- Multer
- Nodemailer
- Swagger
- Nodemon

## Project Features:

- Contact Management:
  - Users can create, delete, modify, and browse individual contacts or the entire contact list.
- User Authentication and Authorization:
  - Implemented user registration, login, logout, and JWT-based authorization.
  - Secure password hashing with bcrypt.
- Email Verification:
  - Users are verified via email using nodemailer.
  - Postmark is utilized for automated email sending.
- Image Processing:
  - Gravatar is used for generating avatars based on user email addresses.
  - Jimp is employed for image processing.
- File Uploads:
  - Multer is integrated for handling file uploads.
- API Documentation:
  - Swagger is implemented to provide API documentation.
- Development Optimization:
  - Nodemon is used for automatic server restarting during development, enhancing the development workflow.

## Project Objectives:

- Backend Development:
  - Proficient use of Node.js and Express for building a scalable and secure backend.
  - Efficient interaction with MongoDB using Mongoose for data storage and retrieval.
- User Authentication and Authorization:
  - Implementation of secure user authentication and authorization using JWT tokens.
- Email Verification:
  - Utilization of nodemailer for automated email verification, enhancing account security.
- Middleware Integration:
  - Seamless integration of various middleware libraries for functionality such as image processing, file uploads, and API documentation.
- Scalable and Secure API Design:
  - The application is designed with a focus on security, utilizing industry best practices for password hashing and user authentication.

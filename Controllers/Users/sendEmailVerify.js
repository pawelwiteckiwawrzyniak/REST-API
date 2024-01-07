import "dotenv/config";
import nodemailer from "nodemailer";

export const sendEmailVerify = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-broadcasts.postmarkapp.com",
    port: 587,
    auth: {
      user: process.env.ACCESS_KEY,
      pass: process.env.SECRET_KEY,
    },
  });

  const payload = {
    from: process.env.USER,
    to: email,
    subject: "Verification Email",
    text: "Hello",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">VerificationLink</a>`,
  };

  try {
    await transporter.sendMail(payload);
  } catch (error) {
    console.log(error);
  }
};

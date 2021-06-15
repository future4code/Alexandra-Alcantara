import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  tls: { ciphers: "SSLv3" },
});

export default mailTransporter;

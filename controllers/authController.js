// controllers/authController.js 
import Otp from "../models/Otp.js";
import emailjs from "@emailjs/nodejs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const requestOtp = async (req, res) => {
  const { email } = req.body;

  const allowedEmails = process.env.ADMIN_EMAILS?.split(","); // that provide an array ["a@gmail", "b@gmail"]

  if (!allowedEmails.includes(email)) {
    return res.status(401).json({ message: "Unauthorized Email" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await Otp.create({ email, otp });

  const name = 
  email === "dlshngamage917@gmail.com" ? "Dilshan" :
  email === "princthiru965@gmail.com" ? "Princi" :
  email === "prabathc357@gmail.com" ? "Prabath" :
  "User";


  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        to_email: email,
        otp_code: otp,
        name: name,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    res.json({ message: `OTP sent to ${email}` });
  } catch (err) {
    console.error("EmailJS error:", err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const existingOtp = await Otp.findOne({ email, otp });

  if (!existingOtp) {
    return res.status(401).json({ message: "Invalid or expired OTP" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "3h" });

  await Otp.deleteMany({ email }); // cleanup database

  res.json({ token });
};

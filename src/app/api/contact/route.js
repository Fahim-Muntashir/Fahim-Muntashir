import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const auth = {
  auth: {
    api_key: "your-mailgun-api-key",
    domain: "your-mailgun-domain",
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, message } = req.body;

    try {
      await nodemailerMailgun.sendMail({
        from: "fahimasdf07@gmail.com",
        to: "recipient@domain.com",
        subject: "New Contact Form Submission",
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

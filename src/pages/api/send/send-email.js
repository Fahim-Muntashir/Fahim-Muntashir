import cors from "cors";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const corsMiddleware = cors({
  origin: "*",
  methods: "POST",
});

export default async function handler(req, res) {
  await corsMiddleware(req, res);

  if (req.method === "POST") {
    const { fullName, email, message } = req.body;

    const auth = {
      auth: {
        api_key: "8c9e82ec-daf112f9",
        domain: "sandbox9295259b78bf4c65a9599b1f71dfb8ba.mailgun.org",
      },
    };

    const nodemailerMailgun = nodemailer.createTransport(mg(auth));

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

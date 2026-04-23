"use server";
import nodemailer from 'nodemailer';

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    // Updated for GoDaddy/Secureserver
    host: "smtpout.secureserver.net", 
    port: 465,
    secure: true, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Alsafety Website" <${process.env.SMTP_USER}>`,
      to: "inquiry@alsafety.info",
      replyTo: email,
      subject: `New Lead: ${name}`,
      html: `<h3>New Inquiry</h3><p><strong>From:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { success: false };
  }
}
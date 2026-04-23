"use server";
import nodemailer from 'nodemailer';

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // 1. Create the Titan SMTP Transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // 2. Send the email
    await transporter.sendMail({
      from: `"Alsafety Website" <${process.env.SMTP_USER}>`,
      to: "inquiry@alsafety.info",
      replyTo: email,
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #1e3a8a;">Website Inquiry</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { success: false };
  }
}
"use server";
import nodemailer from 'nodemailer';

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string; // New Field
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
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
      from: `"Alsafety Web" <${process.env.SMTP_USER}>`,
      to: "inquiry@alsafety.info",
      replyTo: email,
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Customer Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message / Requirements:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("SMTP Error:", error);
    return { success: false };
  }
}
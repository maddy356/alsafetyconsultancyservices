"use server";
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      // 1. MUST be your domain. 'info@' or 'web@' works best.
      from: 'Alsafety Web <info@alsafety.info>', 
      
      // 2. The client's receiving inbox
      to: ['sales@alsafety.info'], 
      
      // 3. This allows the client to hit "Reply" and talk to the customer directly
      reply_to: email, 
      
      subject: `New Business Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Customer Email:</strong> ${email}</p>
          <p style="margin-top: 20px;"><strong>Message/Requirements:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            ${message}
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #64748b;">This inquiry was sent from the Alsafety Consultancy Services contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (e) {
    console.error("System Error:", e);
    return { success: false };
  }
}
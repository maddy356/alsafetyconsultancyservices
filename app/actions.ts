"use server";
import { Resend } from 'resend';

// Make sure your RESEND_API_KEY is in Vercel Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { error } = await resend.emails.send({
      // Identity seen by the recipient
      from: 'Alsafety Web <info@alsafety.info>', 
      
      // Where the inquiry arrives (Your professional GoDaddy inbox)
      to: ['sales@alsafety.info'], 
      
      // Allows you to reply directly to the customer's personal email
      replyTo: email, 
      
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">New Website Inquiry</h2>
          <p style="margin-bottom: 10px;"><strong>Customer Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Customer Email:</strong> ${email}</p>
          <div style="margin-top: 20px; background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="font-weight: bold; margin-bottom: 5px;">Message/Requirements:</p>
            <p style="color: #334155; line-height: 1.5;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 30px;">
            Inquiry sent via Alsafety Consultancy Web Portal. Authorized by aliabdullaali@me.com
          </p>
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
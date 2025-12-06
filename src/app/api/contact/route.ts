import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  company: z.string().optional(),
  phone: z.string().optional(),
  category: z.string().optional(),
  project: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, email, message, company, phone, category, project } = parsed.data;

    console.log("📧 Contact form submission from:", name, "(", email, ")");

    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY not set (development mode)");
      return NextResponse.json({
        success: true,
        message: "Message received! (Email sending disabled in development)",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "bomiqueenliberia@gmail.com",  // Your registered email
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Portfolio Contact</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${category ? `<p><strong>Category:</strong> ${category}</p>` : ''}
          ${project ? `<p><strong>Project:</strong> ${project}</p>` : ''}
          <hr style="border: 1px solid #ddd; margin: 20px 0;">
          <h3 style="color: #555;">Message:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br>")}
          </p>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      throw new Error("Email service error");
    }

    console.log("✅ Email sent! ID:", data.data?.id);
    
    return NextResponse.json({
      success: true,
      message: "Message sent! I'll respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send. Please email me directly at bomiqueenliberia@gmail.com",
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  link: z.string().trim().min(1).max(500),
  message: z.string().trim().min(1).max(5000),
});

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function readBody(req: NextRequest) {
  const type = req.headers.get("content-type") || "";
  if (type.includes("application/json")) return req.json();
  const form = await req.formData();
  return Object.fromEntries(form.entries());
}

export async function POST(req: NextRequest) {
  let data: z.infer<typeof schema>;
  try {
    data = schema.parse(await readBody(req));
  } catch (error) {
    const errors = error instanceof z.ZodError ? error.flatten().fieldErrors : undefined;
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"CoreDevAI Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "contact@coredevai.com",
      replyTo: data.email,
      subject: `Money Flow Check request from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nProduct: ${data.link}\n\n${data.message}`,
      html: `<p><b>Name:</b> ${esc(data.name)}<br><b>Email:</b> ${esc(data.email)}<br><b>Product:</b> ${esc(data.link)}</p><p>${esc(data.message).replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

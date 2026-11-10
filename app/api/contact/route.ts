import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isEmail } from "../../../lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot anti-spam
};

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  // Honeypot check: If the hidden website field is filled, silently ignore (bot detected)
  if (data.website && data.website.trim().length > 0) {
    console.warn("[contact] Spam bot détecté via honeypot.");
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || !message) {
    return NextResponse.json(
      { ok: false, error: "Les champs nom et message sont requis." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) {
    console.error("[contact] CONTACT_EMAIL non configuré");
    return NextResponse.json(
      { ok: false, error: "Service non configuré." },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: `Portfolio <onboarding@resend.dev>`,
      to: toEmail,
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            Nouveau message du portfolio
          </h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="white-space: pre-wrap; color: #374151;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">
            Envoyé depuis le formulaire de contact — ${new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Erreur envoi email:", err);
    return NextResponse.json(
      { ok: false, error: "Erreur lors de l'envoi. Réessayez plus tard." },
      { status: 500 }
    );
  }
}

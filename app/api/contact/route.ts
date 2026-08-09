import { NextResponse } from "next/server";
import { isEmail } from "../../../lib/validations";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
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

  console.log("[contact]", { name, email, message });

  return NextResponse.json({ ok: true });
}

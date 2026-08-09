import { NextResponse } from "next/server";
import { LANG_COOKIE } from "../../../lib/i18n";
import type { Lang } from "../../../types/lang";

export async function POST(req: Request) {
  let lang: Lang;
  try {
    const body = (await req.json()) as { lang?: string };
    if (body?.lang === "fr" || body?.lang === "en") {
      lang = body.lang;
    } else {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(LANG_COOKIE, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

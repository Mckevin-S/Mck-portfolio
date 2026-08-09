import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()
  // Placeholder: log and return success
  console.log("contact form:", data)
  return NextResponse.json({ ok: true })
}

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { phone, message, delay } = await req.json();

  if (!phone || !message) {
    return NextResponse.json(
      { success: false, message: "Missing data" },
      { status: 400 }
    );
  }

  // Fire and forget — langsung return, kirim di background
  (async () => {
    if (delay) await new Promise((r) => setTimeout(r, delay));

    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONNTE_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ target: phone, message }),
    });
  })();

  return NextResponse.json({ success: true });
}
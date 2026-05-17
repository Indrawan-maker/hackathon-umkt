export async function sendToFonnte({
  phone,
  message,
}: {
  phone: string;
  message: string;
}) {
  const res = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: {
      Authorization: process.env.FONNTE_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      target: phone,
      message,
    }),
  });

  return await res.json();
}
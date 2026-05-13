import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const serverKey = process.env.MIDTRANS_SERVER_KEY!
    const encodedKey = Buffer.from(serverKey + ":").toString("base64")

    const orderId = `SPA-${Date.now()}`

    const payload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: body.total,
      },
      item_details: [
        {
          id: "spa-treatment",
          name: body.treatment,
          price: body.total,
          quantity: 1,
        },
      ],
      customer_details: {
        first_name: body.nama,
        phone: body.nohp,
        email: `${body.nohp}@dehomespa.com`,
      },
    }

    const response = await fetch("https://api.sandbox.midtrans.com/v1/payment-links", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${encodedKey}`,
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    return NextResponse.json(result)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Gagal membuat payment link" },
      { status: 500 }
    )
  }
}
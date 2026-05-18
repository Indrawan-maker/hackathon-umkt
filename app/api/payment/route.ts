import { NextRequest, NextResponse } from "next/server";
import Midtrans from "midtrans-client";


const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET_MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
})


export async function POST(request: NextRequest) {
  const { price } = await request.json();
  const orderId = `TOPUP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: price,
    }
  }

  const transaction = await snap.createTransaction(parameter)
  console.log(transaction)
  return NextResponse.json({ token: transaction.token })
}
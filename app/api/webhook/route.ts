// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from "next/server";
import Midtrans from "midtrans-client";

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET_MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
})

export async function POST(request: NextRequest) {
    const { order_id } = await request.json()
    
    try {
        const transaction = await snap.transaction.status(order_id)
        console.log("Server verification:", transaction)
        
        return NextResponse.json({
            transaction_status: transaction.transaction_status,
            order_id: transaction.order_id,
            gross_amount: transaction.gross_amount
        })
    } catch (error) {
        console.error("Verification error:", error)
        return NextResponse.json({ 
            error: "Verification failed" 
        }, { status: 500 })
    }
}
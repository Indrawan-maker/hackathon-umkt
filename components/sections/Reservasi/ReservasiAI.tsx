"use client"

import { useRouter } from "next/navigation";


export default function ReservasiAI() {
    const router = useRouter();
    return (

        <div className="reservasi-ai bg-second rounded-[15px] p-10 ">
            <h3 className="title text-main text-[35px] font-bold font-poppins">Rekomendasi AI</h3>
            <p className="teks text-[25px] font-poppins text-main">Bingung pilih treatment? Ceritakan apa yang kamu rasakan, dan kami akan pilihkan layanan yang paling cocok buat kamu.</p>
            <button onClick={() => router.push("/flow")} className="mt-10 rounded-full bg-linear-to-r from-[#E3B45E] to-[#BD8622] px-10 py-4 font-poppins text-[16px] font-semibold text-white shadow-lg transition hover:scale-[1.03]">
                Reservasi Sekarang
            </button>
        </div>
    )
}
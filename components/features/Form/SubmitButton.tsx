"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useEffect, useState } from "react";
import { buildMessageToAdmin } from "@/lib/message/toAdmin";
import { buildMessageToPelanggan } from "@/lib/message/toPelanggan";
import { useRouter } from "next/navigation";

interface Props {
  nama: string;
  phone: string;
  gender: string;
  lokasi: string;
  detailAlamat: string;
  payment: string;
  catatan: string;
  treatment: string;
  level: string;
  durasi: string;
  harga: string;
  tanggal: string;
  jam: string;
  keluhan: string;
}


//buat klo user masukkan 08 auto berubah datanya jdi 628 
export function normalizeTo62(phone: string) {
  let cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  }

  if (!cleaned.startsWith("62")) {
    cleaned = "62" + cleaned;
  }

  return cleaned;
}

export default function SubmitButton({
  nama,
  phone,
  gender,
  lokasi,
  detailAlamat,
  catatan,
  treatment,
  level,
  durasi,
  harga,
  tanggal,
  jam,
  keluhan,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState('')
  const router = useRouter()



  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey || "");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleSubmit = async () => {
    if (
      !nama.trim() ||
      !phone.trim() ||
      !lokasi.trim() ||
      !detailAlamat.trim() ||
      !tanggal ||
      !jam
    ) {
      alert("Mohon lengkapi semua data yang diperlukan.");
      return;
    }

    setLoading(true);

    try {
      //wa ke admin
      const messageToAdmin = buildMessageToAdmin({
        nama,
        gender,
        phone,
        lokasi,
        detailAlamat,
        catatan,
        tanggal,
        jam,
        treatment,
        level,
        durasi,
        harga,
      });

      const whatsappUrl = `https://wa.me/6285753421213?text=${encodeURIComponent(
        messageToAdmin
      )}`;

      //chat tips jika ada keluhan
      const hasKeluhan = keluhan && keluhan.trim().length > 0;

      if (hasKeluhan) {
        const res = await fetch("/api/tips", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ keluhan }),
        });

        const data = await res.json();



        if (data.success && Array.isArray(data.data)) {
          const customerMessage = buildMessageToPelanggan({ nama, tips: data.data });

          const formattedPhone = normalizeTo62(phone);
          fetch("/api/sendWA", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone: formattedPhone,
              message: customerMessage,
              delay: 10000,
            }),
          });
        }
      }

      //  redirect ke wa
      window.location.href = whatsappUrl;
    } catch (err) {
      console.error("Gagal submit:", err);

      const fallback = `
Halo Admin, saya ingin reservasi layanan spa.

Nama: ${nama}
Tanggal: ${tanggal}
Jam: ${jam}
`.trim();

      window.location.href =
        "https://wa.me/6289689346487?text=" +
        encodeURIComponent(fallback);
    } finally {
      setLoading(false);
    }
  };

  const closeDialog = () => {
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      which: 27,
      bubbles: true,
    })
    document.dispatchEvent(escapeEvent)
  }

  const handlePayment = async () => {
    if (!window.snap) {
      alert("Midtrans belum siap")
      return
    }
    const data = {
      price: harga,
    }
    const response = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    localStorage.setItem(
      "order",
      JSON.stringify({
        status: "pending",
      })
    )

    const requestData = await response.json()
    window.snap.pay(requestData.token, {
          {
        onSuccess: (result) => {
          router.push("/thanks")
        },

        onPending: (result) => {
          router.push("/pending")
        },

        onError: (result) => {
          router.push("/failed-payment")
        },
      }
        })
}

const handleOrder = async () => {
  if (!payment) {
    alert("Pilih metode pembayaran")
    return
  }

  if (payment === "cash") {
    handleSubmit()
    return
  }

  if (payment === "online") {
    closeDialog()
    setTimeout(() => {
      handlePayment()
    }, 200)

    return
  }


  closeDialog()
}

return (
  <Dialog>
    <DialogTrigger asChild>
      <button
        disabled={loading}
        className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
      >
        {loading ? "Memproses..." : "Kirim Booking"}
      </button>
    </DialogTrigger>

    <DialogContent className="w-md md:max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl">
      <DialogHeader>
        <DialogTitle className="text-center">Detail Pesanan</DialogTitle>
      </DialogHeader>

      <section className="space-y-3 text-sm mt-4">
        <div className="border rounded-lg p-4 space-y-2">
          <h3 className="font-semibold text-lg">Detail Treatment</h3>
          <p><span className="font-medium">Treatment:</span> {treatment || '-'}</p>
          <p><span className="font-medium">Level:</span> {level || '-'}</p>
          <p><span className="font-medium">Durasi:</span> {durasi ? `${durasi} menit` : '-'}</p>
          <p><span className="font-medium">Harga:</span> {harga ? `Rp ${Number(harga).toLocaleString('id-ID')}` : '-'}</p>
        </div>

        <div className="border rounded-lg p-4 space-y-2">
          <h3 className="font-semibold text-lg">Data Pemesan</h3>
          <p><span className="font-medium">Nama:</span> {nama || '-'}</p>
          <p><span className="font-medium">Gender:</span> {gender.length ? gender : '-'}</p>
          <p><span className="font-medium">No HP:</span> {phone || '-'}</p>
          <p><span className="font-medium">Alamat:</span> {detailAlamat || '-'}</p>
          <p><span className="font-medium">Tanggal:</span> {tanggal ? tanggal : '-'}</p>
          <p><span className="font-medium">Jam:</span> {jam || '-'}</p>
          <p><span className="font-medium">Pembayaran:</span> {payment || '-'}</p>
          {catatan && (
            <p><span className="font-medium">Catatan:</span> {catatan}</p>
          )}
        </div>

        <div>
          <label className="text-lg font-medium">Metode Pembayaran</label>
          <Select value={payment} onValueChange={setPayment}>
            <SelectTrigger className="w-full h-12 mt-2">
              <SelectValue placeholder="Pilih metode pembayaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cash">Cash (Bayar di tempat)</SelectItem>
              <SelectItem value="online">Online Payment (QRIS / Transfer / E-Wallet)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <div className="flex flex-col gap-y-2 mt-4">
        <button
          type="button"
          onClick={handleOrder}
          className="w-full h-12 rounded-md bg-[#C9A882] text-white"
        >
          Pesan Sekarang!
        </button>

        <DialogClose asChild>
          <button
            type="button"
            className="w-full h-12 rounded-md bg-black text-white"
          >
            Batal
          </button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
  // <button
  //   onClick={handleSubmit}
  //   disabled={loading}
  //   className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
  // >
  //   {loading ? "Memproses..." : "Kirim Booking"}
  // </button>
);
}
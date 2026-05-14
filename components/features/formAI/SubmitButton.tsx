"use client";

import { useState } from "react";

interface Props {
  nama: string;
  phone: string;
  gender: string;
  alamat: string;
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

export default function SubmitButton({
  nama,
  phone,
  gender,
  alamat,
  payment,
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
  const [tips, setTips] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleSubmit = async () => {
    if (
      !nama.trim() ||
      !phone.trim() ||
      !alamat.trim() ||
      !tanggal ||
      !jam
    ) {
      alert("Mohon lengkapi semua data yang diperlukan.");
      return;
    }

    setLoading(true);

    try {
      // generate pesan WA
      const message = `
Form Reservasi De Home SPA

*Data Pelanggan*
Nama: ${nama}
Gender: ${gender}
Alamat: ${alamat}
No HP: ${phone}
Metode Pembayaran: ${payment}
${catatan ? `Catatan: ${catatan}` : ""}

*Jadwal Treatment*
Tanggal: ${tanggal}
Jam: ${jam}

*Detail Treatment*
Treatment: ${treatment}
Level: ${level}
Durasi: ${durasi} menit
Harga: ${harga}

*Keluhan*
${keluhan}

Terima kasih.
      `.trim();

      const whatsappUrl = `https://wa.me/6289689346487?text=${encodeURIComponent(
        message
      )}`;

      setWaLink(whatsappUrl);

      const res = await fetch("/api/tips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keluhan }),
      });

      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        setTips(data.data);
        setShowModal(true);
      } else {
        console.error("Format tips AI tidak valid:", data);
      }

      setShowModal(true);
    } catch (err) {
      console.error("Gagal submit:", err);

      setTips([
        "Terjadi kendala saat mengambil tips sementara.",
      ]);

      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleContinueWhatsApp = () => {
    if (!waLink) return;

    window.location.href = waLink;
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
      >
        {loading ? "Memproses..." : "Kirim Booking"}
      </button>

      {/* Modal Tips */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
              Dari AI terapis kami
            </p>

            <h3 className="text-base font-semibold text-stone-800 dark:text-stone-100 mb-4">
              Sambil menunggu terapis datang 🌿
            </h3>

            <div className="flex flex-col gap-3 mb-6">
              {tips.map((tip, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-stone-300 text-sm mt-0.5">
                    ✦
                  </span>

                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleContinueWhatsApp}
                className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all"
              >
                Lanjut ke WhatsApp
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 rounded-xl border border-stone-200 dark:border-zinc-700 text-sm font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-zinc-800 transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
"use client";

import { useState } from "react";

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

export default function SubmitButton({
  nama,
  phone,
  gender,
  lokasi,
  detailAlamat,
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
      // WA message
      const message = `
Halo Admin, saya ingin melakukan reservasi layanan spa melalui sistem rekomendasi AI. Berikut adalah detail pesanan saya:

DATA PELANGGAN
Nama: ${nama}
Gender: ${gender}
No HP: ${phone}
Wilayah: ${lokasi}
Alamat Detail: ${detailAlamat}
${catatan ? `Catatan: ${catatan}` : ""}

JADWAL KUNJUNGAN
Tanggal: ${tanggal}
Jam: ${jam} WITA

DETAIL PERAWATAN
Treatment: ${treatment}
Level Tekanan: ${level}
Durasi: ${durasi} menit

INFORMASI PEMBAYARAN
Total Harga: Rp ${harga}
Metode: ${payment}

Mohon konfirmasi ketersediaan terapis untuk jadwal di atas. Terima kasih!
`.trim();

      const whatsappUrl = `https://wa.me/6289689346487?text=${encodeURIComponent(
        message
      )}`;

      const res = await fetch("/api/tips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keluhan }),
      });

      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        data.data.forEach((tip: string, i: number) => {
          console.log(`${i + 1}. ${tip}`);
        });
      } else {
        console.log("AI TIPS ERROR:", data);
      }

      window.location.href = whatsappUrl;
    } catch (err) {
      console.error("Gagal submit:", err);

      const fallbackMessage = `
Halo Admin, saya ingin reservasi layanan spa.

Nama: ${nama}
Tanggal: ${tanggal}
Jam: ${jam}
`.trim();

      window.location.href =
        "https://wa.me/6289689346487?text=" +
        encodeURIComponent(fallbackMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={loading}
      className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
    >
      {loading ? "Memproses..." : "Kirim Booking"}
    </button>
  );
}
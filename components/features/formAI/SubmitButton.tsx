interface Props {
  nama: string; phone: string; gender: string;
  alamat: string; payment: string; catatan: string;
  treatment: string; level: string; durasi: string; harga: string;
  tanggal: string; jam: string;
}

export default function SubmitButton({ nama, phone, gender, alamat, payment, catatan, treatment, level, durasi, harga, tanggal, jam }: Props) {
  const handleSubmit = () => {
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

Terima kasih.
    `.trim();


    if (!nama.trim() || !phone.trim() || !alamat.trim() || !tanggal || !jam) {
      alert("Mohon lengkapi semua data yang diperlukan.");
      return;
    }

    window.open(`https://wa.me/6289689346487?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button
      onClick={handleSubmit}
      className="w-full py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-all active:scale-95"
    >
      Kirim Booking
    </button>
  );
}
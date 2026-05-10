interface Props {
  nama: string; phone: string; gender: string;
  alamat: string; payment: string; catatan: string;
  treatment: string; level: string; durasi: string; harga: string;
}

export default function SubmitButton({ nama, phone, gender, alamat, payment, catatan, treatment, level, durasi, harga }: Props) {
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

*Detail Treatment*
Treatment: ${treatment}
Level: ${level}
Durasi: ${durasi} menit
Harga: ${harga}

Terima kasih.
    `.trim();

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
import type { Result, Treatment } from "@/types/flow";
import { formatPrice } from "@/utils/formatRupiah";

interface Props {
  result: Result;
}

const handleBooking = (treatment: Treatment, durasi: number) => {
  const params = new URLSearchParams({
    treatment: treatment.nama,
    level: treatment.level,
    durasi: String(durasi),
    harga: String(treatment.harga_durasi),
  });

  window.location.href = `/form?${params.toString()}`;
};


export default function StepResult({ result }: Props) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">
        Rekomendasi AI
      </p>

      {/* Main Result */}
      <div className="border-2 border-stone-800 rounded-3xl p-5 mb-5">
        <p className="text-xs text-stone-500 mb-2">
          {result.treatment.area} · {result.treatment.level}
        </p>

        <h2 className="text-lg font-semibold text-stone-800 mb-3">
          {result.treatment.nama}
        </h2>

        <p className="text-sm leading-relaxed text-stone-600 mb-5">
          {result.reason}
        </p>

        <div className="flex items-center justify-between border-t border-stone-200 pt-4 mb-5">
          <div>
            <p className="text-xs text-stone-400 mb-1">Durasi</p>
            <p className="text-sm font-medium text-stone-800">{result.durasi} menit</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-stone-400 mb-1">Harga</p>
            <p className="text-sm font-medium text-stone-800">
              {formatPrice(result.treatment.harga_durasi)}
            </p>
          </div>
        </div>

        <button
          onClick={() => handleBooking(result.treatment, result.durasi)}
          className="w-full py-3 rounded-2xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700">
          Booking sekarang
        </button>
      </div>

      {/* Treatment Terkait */}
      {result.related?.length > 0 && (
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
            Treatment Terkait
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {result.related.map((t) => (
              <div
                key={t.kode}
                className="border border-stone-200 rounded-2xl p-4 hover:border-stone-400 transition flex flex-col gap-3"
              >
                <div>
                  <p className="text-xs text-stone-400 mb-1">{t.area}</p>
                  <p className="text-sm font-medium text-stone-800 leading-snug">{t.nama}</p>
                  <p className="text-xs text-stone-500 mt-1">
                    {t.level} · {result.durasi} menit
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  <p className="text-sm font-semibold text-stone-800">
                    {formatPrice(t.harga_durasi)}
                  </p>
                  <button
                    onClick={() => handleBooking(t, result.durasi)}
                    className="w-full py-2 px-4 bg-stone-800 text-white text-xs font-medium rounded-xl hover:bg-stone-700 transition">
                    Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => { window.location.href = "/"; }}
        className="w-full py-3 rounded-2xl border border-stone-200 text-sm text-stone-600 hover:bg-stone-50"
      >
        Minta rekomendasi lain
      </button>
    </div>
  );
}
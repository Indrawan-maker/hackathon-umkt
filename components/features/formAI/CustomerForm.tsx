interface Props {
  nama: string; setNama: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  gender: string; setGender: (v: string) => void;
  alamat: string; setAlamat: (v: string) => void;
  payment: string; setPayment: (v: string) => void;
  catatan: string; setCatatan: (v: string) => void;
}

export default function CustomerForm({
  nama, setNama, phone, setPhone,
  gender, setGender, alamat, setAlamat,
  payment, setPayment, catatan, setCatatan,
}: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-medium text-stone-800 mb-4">Data Pelanggan</h2>
      <div className="space-y-4">

        <div>
          <label className="text-xs text-stone-500 mb-1 block">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama lengkap"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
          />
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
          >
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">Alamat</label>
          <textarea
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat lengkap"
            className="w-full min-h-22.5 rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none resize-none focus:border-stone-400"
          />
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">Nomor HP</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08xxxxxxxxxx"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
          />
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">Metode Pembayaran</label>
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
          >
            <option>Cash</option>
            <option>Transfer Bank</option>
            <option>E-Wallet</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-stone-500 mb-1 block">Catatan Tambahan</label>
          <textarea
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="Opsional..."
            className="w-full min-h-22.5 rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none resize-none focus:border-stone-400"
          />
        </div>

      </div>
    </div>
  );
}
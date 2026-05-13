interface Props {
  nama: string; setNama: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  gender: string; setGender: (v: string) => void;
  alamat: string; setAlamat: (v: string) => void;
  payment: string; setPayment: (v: string) => void;
  catatan: string; setCatatan: (v: string) => void;
  tanggal: string; setTanggal: (v: string) => void;
  jam: string; setJam: (v: string) => void;
}

export default function CustomerForm({
  nama, setNama, phone, setPhone,
  gender, setGender, alamat, setAlamat,
  payment, setPayment, catatan, setCatatan,
  tanggal, setTanggal, jam, setJam,
}: Props) {
  return (

    <>
      <div className="mb-5">
        <h3 className="text-sm font-medium text-stone-800 mb-3">Jadwal Treatment</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-stone-500 mb-1 block">Tanggal</label>
            <input
              type="date"
              required
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>
          <div>
            <label className="text-xs text-stone-500 mb-1 block">Jam</label>
            <input
              type="time"
              required
              value={jam}
              onChange={(e) => setJam(e.target.value)}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-stone-800 mb-4">Data Pelanggan</h2>
        <div className="space-y-4">

          <div>
            <label className="text-xs text-stone-500 mb-1 block">Nama</label>
            <input
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama lengkap"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">Gender</label>
            <select required
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
            <textarea required
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Alamat lengkap"
              className="w-full min-h-22.5 rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none resize-none focus:border-stone-400"
            />
          </div>

          <div>
            <label className="text-xs text-stone-500 mb-1 block">Nomor HP</label>
            <input required
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-stone-400"
            />
          </div>



          <div>
            <label className="text-xs text-stone-500 mb-1 block">Metode Pembayaran</label>
            <select required
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
      </div></>
  );
}
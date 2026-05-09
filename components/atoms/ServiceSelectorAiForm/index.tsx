import { FormEvent, useState } from "react"
import abu from '@/public/images/anatomy/default.webp';
import { imageMapping } from "@/utils/imageMapping";
import Image from "next/image";


export default function ServiceSelectorAiForm() {

    const [selected, setSelected] = useState<string[]>([])

    const areas = [
        { id: "kepala", label: "Kepala", desc: "Kepala & Leher" },
        { id: "punggung", label: "Punggung", desc: "Punggung & Bahu" },
        { id: "tangan", label: "Tangan", desc: "Tangan & Lengan" },
        { id: "kaki", label: "Kaki", desc: "Kaki & Betis" },
    ]

    const handleSelectedBtn = (id: string) => {
        setSelected(selected.includes(id)
            ? selected.filter(x => x !== id)
            : [...selected, id]
        )
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(selected)
    }

    const getSelectedImage = () => {
  if (selected.length === 0) return abu
  
  const key = selected
    .sort()
    .map((area, index) => index === 0 ? area : area.charAt(0).toUpperCase() + area.slice(1))
    .join('Dan')
  return imageMapping[key as keyof typeof imageMapping] || abu
}
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-start ml-auto items-start">
                    <label htmlFor="" className="text-xl font-medium">Pilih Area Tubuh <br /></label>
                    <p className="text-gray-400">*anda dapat memilih lebih dari satu</p>
                </div>
                <section>
                </section>
                <section className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-x-4 gap-y-2">
                    {/* kepala */}
                    {areas.map(area => (
                        <div
                            className="w-62 h-28"
                            key={area.id}>
                            <button
                                value='kepala'
                                onClick={() => handleSelectedBtn(area.id)}
                                className={
                                    `border rounded-xl cursor-pointer w-full h-full p-4 transition duration-300 ${selected.includes(area.id) ? 'border-4 border-[#8B6B52]' : ''}`
                                }
                                type="button"

                            >
                                <h2 className="text-left mb-2">{area.label}</h2>
                                <p className="text-left text-gray-400">{area.desc}</p>
                            </button>
                        </div>
                    ))}
                </section>
                {/* area gambar tubuh start*/}
                <section>
                    <div>
                        <Image
                            src={getSelectedImage()}
                            alt='test'
                            loading="lazy"
                        />
                    </div>
                </section>
                {/* area gambar tubuh end*/}


                <div className="mt-12 flex justify-end">
                    <button
                        type="submit"
                        disabled={selected.length === 0}
                        className={`w-full h-12 rounded-md
                        ${selected.length === 0 ?
                                'bg-[#E8DDD3] text-[#9D8B7F] cursor-no-drop' : 'bg-[#C9A882] text-white'
                            }`}
                    >Kirim</button>
                </div>
            </form>
        </>
    )
}
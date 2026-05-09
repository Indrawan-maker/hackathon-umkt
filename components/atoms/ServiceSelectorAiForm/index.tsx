"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import abu from '@/public/images/anatomy/default.webp';
import { getSelectedImage } from "@/utils/getSelectedImage";

const idToLabel: Record<number, string> = {
  1: "Kepala",
  2: "Tangan",
  3: "Punggung",
  4: "Kaki",
};

export default function ServiceSelectorAiForm() {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);

  const areas = [
    { id: 1, name: "kepala", label: "Kepala", desc: "Kepala & Leher" },
    { id: 2, name: "lengan", label: "Tangan", desc: "Tangan & Lengan" },
    { id: 3, name: "punggung", label: "Punggung", desc: "Punggung & Bahu" },
    { id: 4, name: "kaki", label: "Kaki", desc: "Kaki & Betis" },
  ];

  const handleSelectedBtn = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const areas = selected.map((id) => idToLabel[id]);
    const params = new URLSearchParams();
    params.set("areas", areas.join(","));
    router.push(`/flow?${params.toString()}`);
  };

  return (
    <>
      <div className="flex flex-col justify-start ml-auto items-start">
        <label className="text-xl font-medium" id="pilihAreaTubuh">
          Pilih Area Tubuh <br />
        </label>
        <p className="text-gray-400 text-sm">*anda dapat memilih lebih dari satu</p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-x-4 gap-y-2">
        {areas.map((area) => (
          <div className="w-32 md:w-62 h-22 md:h-28" key={area.id}>
            <button
              onClick={() => handleSelectedBtn(area.id)}
              className={`border rounded-xl cursor-pointer w-full h-full p-2 md:p-4 transition duration-300 ${
                selected.includes(area.id) ? "border-4 border-[#8B6B52]" : ""
              }`}
              type="button"
            >
              <h2 className="text-center md:text-left mb-2">{area.label}</h2>
              <p className="text-center md:text-left text-xs text-gray-400">
                {area.desc}
              </p>
            </button>
          </div>
        ))}
      </section>

      <section className="mt-6 flex justify-center items-center">
        <div className="w-28 h-72 md:w-42 md:h-120">
          <Image
            src={getSelectedImage(selected, abu)}
            alt="Area tubuh"
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </section>

      <div className="mt-12 flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected.length === 0}
          className={`w-full h-12 rounded-md ${
            selected.length === 0
              ? "bg-[#E8DDD3] text-[#9D8B7F] cursor-no-drop"
              : "bg-[#C9A882] text-white"
          }`}
        >
          Pilih
        </button>
      </div>
    </>
  );
}
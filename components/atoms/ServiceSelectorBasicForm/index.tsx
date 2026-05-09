"use client"

import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useRef, useState } from "react"


export default function ServiceSelectorBasicForm() {
    const [gender, setGender] = useState<string[]>([]);
    const [date, setDate] = useState<Date>();
    const [time, setTime] = useState("");
    const timeRef = useRef<HTMLInputElement>(null)

const openTimePicker = () => {
  timeRef.current?.focus()
  timeRef.current?.showPicker?.() // bonus (Chrome mobile/desktop)
}

    const handleCheckboxGender = (value: string) => {
        setGender((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value])
    }
    return (
        <>
            <form action="">
                <section>
                    <div className="flex flex-col justify-start ">
                        <h2 className="text-3xl font-semibold">Form Reservasi Samarinda Home Spa</h2>
                        <p className="mt-2 text-lg font-light">FAQ : </p>
                        <p className="mt-2 text-lg font-light">- Jam Operasional : 08.00 - 21.00 </p>
                        <p className="mt-2 text-lg font-light">- Booking minimal 1 jam sebelumnya</p>
                        <p className="mt-2 text-lg font-light">- Free ongkos Transport</p>
                        <p className="mt-2 text-lg font-light">- Perlengakapan yang disediakan : Oil/Cream Massage, Kain alas & penutup badan, dan Handuk kecil</p>
                    </div>
                </section>
                <section className="mt-8">
                    <div className="md:flex w-full gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Nama <span className="text-red-600">*</span></label>
                            <input
                                className="border-2 h-12 w-full p-4 rounded-md"
                                type="text" placeholder="Masukan Nama Treatment" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-xl mb-2"
                                htmlFor="">Level Treatment <span className="text-red-600">*</span></label>
                            <input
                                className="border-2 h-12 w-full p-4 rounded-md"
                                type="text" placeholder="Masukan Level Treatment" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-4 md:mt-8">
                        <label htmlFor="" className="mb-2 text-xl">Gender <span className="text-red-600">*</span></label>
                        <p className="text-sm text-gray-500 mb-1">Jika lebih dari 1 orang dan berbeda gender seperti pasangan suami istri, harap dicentang keduanya</p>
                        <label
                            id="pria"
                            className={
                                `flex justify-start items-center gap-6 w-full border-2 rounded-md h-12 py-2 px-8 mb-4 cursor-pointer
                        ${gender.includes("pria") ? 'border-4 border-[#8B6B52] text-[#9D8B7F]' : ''
                                }`

                            }
                        >
                            <Checkbox
                                id="pria"
                                checked={gender.includes("pria")}
                                onCheckedChange={() => handleCheckboxGender("pria")}
                                className="data-[state=checked]:bg-[#8B6B52] data-[state=checked]:border-[#C9A882] w-5 h-5"
                            />
                            <label htmlFor="pria"
                                className="text-xl"
                            >Pria</label>
                        </label>
                        <label
                            id="pria"
                            className={
                                `flex justify-start items-center gap-6 w-full border-2 rounded-md h-12 py-2 px-8 cursor-pointer
                        ${gender.includes("wanita") ? 'border-4 border-[#8B6B52] text-[#9D8B7F]' : ''
                                }`

                            }
                        >
                            <Checkbox
                                id="wanita"
                                checked={gender.includes("wanita")}
                                onCheckedChange={() => handleCheckboxGender("wanita")}
                                className="data-[state=checked]:bg-[#8B6B52] data-[state=checked]:border-[#C9A882] w-5 h-5"
                            />
                            <label htmlFor="wanita"
                                className="text-xl"
                            >Wanita</label>
                        </label>
                    </div>
                    <div className="md:flex w-full mt-4 md:mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Alamat Lengkap  <span className="text-red-600">*</span></label>
                            <textarea
                                className="border-2 h-32 w-full p-4 rounded-md"
                                placeholder="Masukkan Alamat Lengkap" />
                        </div>
                    </div>
                    <div className="md:flex w-full mt-4 md:mt-8">
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className="text-xl mb-2">Jadwal Treatment <span className="text-red-600">*</span></label>
                            {/* date expectected start */}
                            {/* tanggal */}
                            <div className="flex flex-col gap-2">
                                <label>Tanggal Treatment</label>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="justify-start text-left font-normal"
                                        >
                                            {date ? 'sementara gini ntar ganti format tanggal kapan hari lah' : "Pilih tanggal"}
                                        </Button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* jam */}
                            <div className="flex flex-col gap-2 cursor-pointer"
                            onClick={openTimePicker}
                            >
                                <label>Jam Treatment</label>
                                <input
                                ref={timeRef}
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="border rounded-md h-10 px-3"
                                />
                            </div>

                            {/* date expectected end */}
                        </div>
                    </div>
                </section>
                <div>
                    <button type="submit">Kirim</button>
                </div>
            </form>
        </>
    )
}
import Image from "next/image"
import batu from "@/public/images/aboutspa.png"
import lulur from "@/public/images/aboutspa2.jpg"
export default function about() {
    return (
        <>
            <div className="about1 relative overflow-hidden w-full min-h-screen bg-[#FDF5E6] px-6 py-16 md:px-16 lg:px-28 flex items-center">

                <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#E8D0A4]" />

                <div className="relative z-10 w-full flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">

                    <div className="about-left max-w-160">

                        <div className="text">
                            <p className="font-poppins text-[#625144] text-[18px] leading-[190%] md:text-[22px]">
                                Di de HOME SPA, kami percaya bahwa di tengah hiruk-pikuk dunia, bisa beristirahat dengan mudah adalah kemewahan sejati melalui perpaduan kecanggihan digital dengan sentuhan tangan yang tulus untuk menghadirkan layanan spa profesional yang personal langsung ke rumah Anda, karena bagi kami, kenyamanan Anda adalah prioritas utama.
                            </p>
                        </div>

                        <button className="mt-10 rounded-full bg-linear-to-r from-[#E3B45E] to-[#BD8622] px-10 py-4 font-poppins text-[16px] font-semibold text-white shadow-lg transition hover:scale-[1.03]">
                            Reservasi Sekarang
                        </button>

                    </div>

                    <div className="about-right flex flex-col items-center lg:items-end">

                        <div className="text-head">
                            <h1 className="font-poppins font-extrabold text-[50px] leading-[100%] text-[#7A5C45] md:text-[78px] lg:text-[80px]">
                                De Home Spa
                            </h1>
                        </div>

                        <div className="mt-8 self-start lg:self-end">
                            <Image
                                src={batu}
                                alt="Spa Stone"
                                width={305}
                                height={270}
                                className="h-67.5 w-76.25 object-contain"
                            />
                        </div>

                    </div>

                </div>


            </div>

            <div className="about2 w-full h-screen p-16 bg-[#FDF5E6]">
                <div className="about-center relative pb-16">
                    <div className="about-bg bg-[#E8D0A4] px-15 py-20 ">
                        <div className="w-1/2">
                            <div className="about-head font-playfair text-[#8B6B52] text-[70px]">About</div>
                            <div className="about-text font-poppins text-[#8B6B52]">Di de HOME SPA, kami percaya bahwa di tengah hiruk-pikuk dunia, bisa beristirahat dengan mudah adalah kemewahan sejati. Kami hadir memadukan kecanggihan digital dengan sentuhan tangan yang tulus untuk memberikan pengalaman relaksasi yang berbeda.</div>
                            <div className="about-btn">
                                <button className="mt-10 rounded-full bg-linear-to-r from-[#E3B45E] to-[#BD8622] px-10 py-4 font-poppins text-[16px] font-semibold text-white shadow-lg transition hover:scale-[1.03]">
                                    Reservasi Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={lulur}
                        alt="Image about"
                        width={630}
                        height={630}
                        className="h-150 w-150 object-contain absolute right-10 top-10"
                    />
                </div>
            </div>
        </>
    )
}
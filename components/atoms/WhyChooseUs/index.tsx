import {
    BadgeDollarSign,
    House,
    Sparkles,
    Calendar,
    UserRound,
} from "lucide-react";



const overallItems = [
    {
        heading: "1.200+",
        text: "Pelanggan Puas"
    },
    {
        heading: "26",
        text: "Jenis Layanan"
    },
    {
        heading: "4.8",
        text: "Rating Rata-rata"
    },
]


export const whyChooseUsItems = [
    {
        icon: BadgeDollarSign,
        heading: "Harga Transparan",
        text: "Harga yang tertera adalah harga final tanpa ada biaya tambahan atau biaya tersembunyi lainnya.",
    },

    {
        icon: House,
        heading: "Datang Ke Rumah",
        text: "Nikmati layanan pijat berkualitas tanpa perlu keluar rumah; terapis kami akan datang langsung ke lokasi Anda.",
    },

    {
        icon: Sparkles,
        heading: "Saran Pijat Pintar",
        text: "Gunakan asisten pintar kami untuk menemukan jenis pijat yang paling tepat berdasarkan kebutuhan dan masalah tubuh Anda secara presisi.",
    },

    {
        icon: Calendar,
        heading: "Booking Mudah",
        text: "Sistem reservasi yang simpel dan cepat memungkinkan Anda memesan jadwal hanya dalam hitungan detik.",
    },

    {
        icon: UserRound,
        heading: "Profesional",
        text: "Terapis kami telah tersertifikasi dan berpengalaman dalam berbagai teknik pijat untuk hasil yang optimal.",
    },
];


export default function WhyChooseUs() {
    return (
        <section className=" w-full ">

            <div className="overall bg-[#FDF5E6] h-auto py-10 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60">
                <div className="overall-content flex flex-col items-center justify-between gap-8 text-[#625144] font-poppins sm:flex-row sm:gap-4">
                    {overallItems.map((item) => (
                        <div key={item.heading} className="overallContent text-center">
                            <h2 className="text-4xl font-extrabold sm:text-5xl md:text-[55px]">{item.heading}</h2>
                            <p className="text-base font-semibold sm:text-lg md:text-[20px]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="WhyChooseUs bg-[#E8D0A4] px-6 py-20 md:px-10 lg:px-20">

                <div className="mb-16 text-center">
                    <h2
                        className=" font-playfair text-[48px] font-medium tracking-tight text-[#7A5C45] md:text-5xl "
                    >
                        Kenapa Pilih Kami?
                    </h2>
                </div>

                <div
                    className=" grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-5 "
                >
                    {whyChooseUsItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.heading}
                                className=" relative flex flex-col items-center px-4 "
                            >
                                {index !== whyChooseUsItems.length - 1 && (
                                    <div
                                        className=" absolute top-1/2 right-0 hidden h-28 w-px -translate-y-1/2  bg-[#B08968]/40 lg:block"
                                    />
                                )}

                                <div className="mb-5 text-[#8B6A52]">
                                    <Icon size={52} strokeWidth={1.8} />
                                </div>

                                <h3
                                    className=" mb-3 text-2xl font-bold tracking-tight text-[#7A5C45]"
                                >
                                    {item.heading}
                                </h3>

                                <p
                                    className=" max-w-60 text-base leading-relaxed text-[#7A5C45]/80"
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
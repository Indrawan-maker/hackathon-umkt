"use client"
import Image from "next/image";
import hero from "@/public/images/hero-spa-lobby.webp"
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <>
            <main className="w-full min-h-screen relative">
                <Image className="absolute inset-0 w-full h-full object-cover"
                    src={hero}
                    priority
                    alt="hero home spa"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                    <motion.h1
                         initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
                        className={`text-4xl md:text-8xl text-white text-center mb-8 font-bold`}>
                        Jemari Home Spa
                    </motion.h1>
                    <motion.p
                         initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-sm md:text-xl text-white text-center max-w-3xl leading-relaxed tracking-wide font-medium">
                        Melayani Jasa Kerokan Terpercaya.
                        <br />
                        Rating 4/9/5 ⭐⭐⭐⭐⭐
                        <br />
                        Melayani Jasa Kerokan Panggilan
                    </motion.p>
                </div>
            </main>
        </>
    )
}
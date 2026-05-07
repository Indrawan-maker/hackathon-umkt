import type { Metadata } from "next";
import "./globals.css";
import { Inter, Geist } from 'next/font/google'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "HOME SPA",
  description: "Tempat spa terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", inter.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col scroll-smooth">
        {children}
      </body>
    </html>
  );
}

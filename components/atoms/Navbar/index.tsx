"use client"
import logo from '@/public/images/home-spa-logo.webp';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const



export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 1) baca docs shadcn agar hamburger menu fungsi 
    // - bagian sheet

    return (
        <nav
            className={`bg-neutral-primary fixed w-full z-20 top-0 start-0 transition-all duration-700 ${isScrolled ? 'backdrop-blur-sm bg-opacity-95 border-b border-default' : ''}`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-[#B7A997]">
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} width={82} height={62} quality={70} alt="Home Spa Logo" />
                    <span className="self-center hidden md:block text-xl text-heading font-semibold whitespace-nowrap">Home SPA</span>
                </Link>
                <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="hover:bg-brand-strong box-border border border-transparent cursor-pointer font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Reservasi Sekarang!</button>
                    <Sheet>
                        <SheetTrigger>
                            <button className='inline-flex items-center p-2 w-11 h-11 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary'>
                                <CiMenuBurger className='w-full h-full' />
                            </button>
                        </SheetTrigger>

                        <SheetContent side='left' className='bg-[#F5E6C8]'>
                            <SheetHeader>
                                <SheetTitle>
                                    <Image src={logo} width={80} height={60} alt='logo spa' />
                                </SheetTitle>
                            </SheetHeader>
                            <div>
                                isi
                            </div>
                            <SheetFooter>
                                <button>@Home Spa</button>

                                <SheetClose asChild>
                                    <button>
                                        Cancel
                                    </button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <a href="#" className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#spaServiceList" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


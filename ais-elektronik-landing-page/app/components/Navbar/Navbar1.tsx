import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Signindialog from './Signindialog';
import Image from 'next/image';
import React, { useState } from "react";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Beranda', href: '#home-section', current: false },
    { name: 'Tentang Kami', href: '#tentang-kami', current: false },
    { name: 'Layanan', href: '#layanan-section', current: false },
    { name: 'Klien', href: '#client-section', current: false },
    { name: 'Lokasi', href: '#lokasi', current: false },
    { name: 'Galeri', href: '#gallery-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const whatsappNumber = "6285716294985";
    const whatsappMessage = "Halo, saya tertarik dengan layanan Ais Elektronik. Mohon informasi lebih lanjut!";

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-2 md:p-4 lg:px-6">
                    <div className="relative flex h-7 sm:h-14 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/Logo.svg" alt="logo" width={92} height={92} />
                                <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                    {/* Aiz Elektronik. */}
                                </Link>
                            </div>
                            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/Logo.svg" alt="logo" width={144} height={144} />
                                <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                    {/* Aiz Elektronik. */}
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-black text-white' : 'text-black hover:text-gray-800',
                                                'px-3 py-4 rounded-md text-lg font-normal space-links'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="gap-6 hidden lg:flex">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white bg-[#1B71A1] py-2 px-6 rounded-md hover:bg-white hover:text-[#1B71A1] border hover:border-[#1B71A1] shadow-md transition-all duration-300 transform hover:scale-105"
                                onMouseEnter={() => setIsHovered(true)} // Saat mouse masuk
                                onMouseLeave={() => setIsHovered(false)} // Saat mouse keluar
                            >
                                <Image
                                    src={isHovered ? '/images/Navbar/phone2.svg' : '/images/Navbar/phone.svg'} // Ganti src berdasarkan hover
                                    alt="phone-image"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-lg font-semibold">Hubungi</span>
                            </a>
                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
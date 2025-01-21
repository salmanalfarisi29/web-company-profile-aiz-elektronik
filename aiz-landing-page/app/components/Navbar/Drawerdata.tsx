import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Beranda', href: '#home-section', current: false },
    { name: 'Tentang Kami', href: '#cook-section', current: false },
    { name: 'Layanan', href: '#about-section', current: false },
    // { name: 'Klien', href: '#client-section', current: false },
    { name: 'Lokasi', href: '#location-section', current: false },
    { name: 'Galeri', href: '#gallery-section', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Data = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Nomor WhatsApp dan pesan default
    const whatsappNumber = "6285716294985"; // Ganti dengan nomor WhatsApp Anda
    const whatsappMessage = "Halo, saya tertarik dengan layanan Aiz Elektronik. Mohon informasi lebih lanjut!"; // Pesan default

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="mt-4"></div>

                        {/* Tombol Hubungi */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white bg-[#1B71A1] py-2 px-4 rounded-full hover:bg-white hover:text-[#1B71A1] border hover:border-[#1B71A1] transition-all duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Image
                                src={isHovered ? '/images/Navbar/whatsapp.svg' : '/images/Navbar/whatsapp-2.svg'} // Ganti logo berdasarkan hover
                                alt="phone-icon"
                                width={19}
                                height={19}
                            />
                            <span className="text-lg font-medium">Hubungi</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;

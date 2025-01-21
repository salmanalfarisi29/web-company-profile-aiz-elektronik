"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home-section");

  const navigation: NavigationItem[] = [
    { name: "Beranda", href: "#home-section", current: false },
    { name: "Tentang Kami", href: "#cook-section", current: false },
    { name: "Layanan", href: "#about-section", current: false },
    { name: "Lokasi", href: "#location-section", current: false },
    { name: "Galeri", href: "#gallery-section", current: false },
  ];

  // Menentukan bagian aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      navigation.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement; // Cast ke HTMLElement
        if (section) {
          const offsetTop = section.offsetTop - 100; // Tambahkan offset
          const offsetBottom = offsetTop + section.clientHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className="navbar sticky top-0 z-50 bg-white shadow-md">
      <>
        <div className="mx-auto max-w-7xl p-2 md:p-4 lg:px-6">
          <div className="relative flex h-12 items-center">
            {/* Logo untuk Mobile */}
            <div className="flex sm:hidden flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  src="/images/Logo/Logo.svg"
                  alt="logo"
                  width={96} // Ukuran logo lebih besar untuk proporsi mobile
                  height={96}
                  className="w-16 h-auto"
                />
              </Link>
            </div>

            {/* Logo untuk Desktop */}
            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
              <Link href="/">
                <Image
                  src="/images/Logo/Logo.svg"
                  alt="logo"
                  width={128} // Logo lebih besar untuk desktop
                  height={128}
                  className="w-32 h-auto"
                />
              </Link>
            </div>

            {/* LINKS */}
            <div className="hidden lg:flex items-center border-right flex-1">
              <div className="flex justify-end space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      activeSection === item.href
                        ? "text-black border-b-2 border-[#1B71A1]"
                        : "text-gray-700 hover:text-black hover:border-b-2 hover:border-[#1B71A1]",
                      "px-3 py-2 text-lg font-medium transition-all duration-300"
                    )}
                    aria-current={activeSection === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Icon untuk Mobile */}
            <div className="block lg:hidden ml-auto">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* Drawer Data */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

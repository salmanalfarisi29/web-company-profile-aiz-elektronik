"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "../Navbar/Drawer";
import Drawerdata from "../Navbar/Drawerdata";
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
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          const offsetTop = section.offsetTop - 100;
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/Logo/Logo.svg"
                alt="logo"
                width={48}
                height={48}
                // className="w-auto h-12 lg:h-16 object-contain"
                className="w-auto h-8 lg:h-12 object-contain"
              />
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden lg:flex items-center space-x-12">
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

          {/* Drawer Icon untuk Mobile */}
          <div className="lg:hidden">
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
    </Disclosure>
  );
};

export default Navbar;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

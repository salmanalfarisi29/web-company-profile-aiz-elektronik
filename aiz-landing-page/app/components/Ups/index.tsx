"use client";

import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const USPSection = () => {
  const uspData = [
    {
      icon: "/images/Usp/1.svg", // Ikon untuk Konsultasi Gratis
      title: "Konsultasi Gratis",
      description: "Tanyakan masalah elektronik Anda tanpa biaya tambahan!",
    },
    {
      icon: "/images/Usp/2.svg", // Ikon untuk Antar-Jemput Barang
      title: "Layanan Antar-Jemput Barang",
      description:
        "Kami menyediakan layanan antar-jemput barang untuk kenyamanan Anda.",
    },
    {
      icon: "/images/Usp/3.svg", // Ikon untuk Melayani On-Site
      title: "Bisa Melayani di Tempat",
      description:
        "Teknisi kami siap memperbaiki perangkat Anda langsung di tempat.",
    },
    {
      icon: "/images/Usp/4.svg", // Ikon untuk Promo dan Diskon
      title: "Promo dan Diskon",
      description: "Nikmati berbagai promo dan diskon untuk layanan kami.",
    },
  ];

  return (
    <div id="usp-section" className="bg-gray-50 py-16 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <Fade direction="up" triggerOnce={true}>
          <h2 className="text-[#1B71A1] text-lg font-semibold mb-4 tracking-widest uppercase">
            Keunggulan Kami
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce={true} delay={200}>
          <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-12">
            Mengapa Memilih Aiz Elektronik?
          </h3>
        </Fade>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uspData.map((usp, index) => (
            <Fade
              direction="up"
              triggerOnce={true}
              delay={index * 200} // Animasi berurutan
              key={index}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between min-h-[250px]">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#1B71A1] rounded-full mb-4">
                  <Image
                    src={usp.icon}
                    alt={usp.title}
                    width={40}
                    height={40}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-black mb-2 text-center">
                  {usp.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center">
                  {usp.description}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USPSection;

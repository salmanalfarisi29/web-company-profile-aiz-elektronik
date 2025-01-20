"use client";

import React from "react";
import Image from "next/image";

const USPSection = () => {
  const uspData = [
    {
      icon: "/images/usp/consultation.svg", // Ikon untuk Konsultasi Gratis
      title: "Konsultasi Gratis",
      description: "Tanyakan masalah elektronik Anda tanpa biaya tambahan!",
    },
    {
      icon: "/images/usp/delivery.svg", // Ikon untuk Antar-Jemput Barang
      title: "Layanan Antar-Jemput Barang",
      description:
        "Kami menyediakan layanan antar-jemput barang untuk kenyamanan Anda.",
    },
    {
      icon: "/images/usp/on-site.svg", // Ikon untuk Melayani On-Site
      title: "Bisa Melayani di Tempat",
      description:
        "Teknisi kami siap memperbaiki perangkat Anda langsung di tempat.",
    },
    {
      icon: "/images/usp/promo.svg", // Ikon untuk Promo dan Diskon
      title: "Promo dan Diskon",
      description: "Nikmati berbagai promo dan diskon untuk layanan kami.",
    },
  ];

  return (
    <div id="usp-section" className="bg-gray-50 py-16 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-[#1B71A1] text-lg font-semibold mb-4 tracking-widest uppercase">
          Keunggulan Kami
        </h2>
        <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-12">
          Mengapa Memilih Aiz Elektronik?
        </h3>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uspData.map((usp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#1B71A1] rounded-full mb-4">
                <Image
                  src={usp.icon}
                  alt={usp.title}
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-black mb-2">
                {usp.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USPSection;

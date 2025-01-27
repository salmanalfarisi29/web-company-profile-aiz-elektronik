// Update to USP Component for better SEO
"use client";

import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

const USPSection = () => {
  const uspData = [
    {
      icon: "/images/Usp/1.svg",
      title: "Konsultasi Gratis",
      description: "Tanyakan masalah elektronik Anda tanpa biaya tambahan!",
    },
    {
      icon: "/images/Usp/2.svg",
      title: "Layanan Antar-Jemput Barang",
      description:
        "Kami menyediakan layanan antar-jemput barang untuk kenyamanan Anda.",
    },
    {
      icon: "/images/Usp/3.svg",
      title: "Bisa Melayani di Tempat",
      description:
        "Teknisi kami siap memperbaiki perangkat Anda langsung di tempat.",
    },
    {
      icon: "/images/Usp/4.svg",
      title: "Promo dan Diskon",
      description: "Nikmati berbagai promo dan diskon untuk layanan kami.",
    },
  ];

  return (
    <>
      <Head>
        <title>Keunggulan Ais Elektronik - Jasa Service Elektronik</title>
        <meta
          name="description"
          content="Temukan keunggulan Ais Elektronik, seperti layanan konsultasi gratis, antar-jemput barang, servis di tempat, dan berbagai promo menarik."
        />
      </Head>
      <div id="keunggulan-kami" className="bg-gray-50 py-20 px-6 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100"></div>
        <div className="mx-auto max-w-7xl text-center">
          {/* Heading */}
          <Fade direction="up" triggerOnce={true}>
            <h1 className="text-[#1B71A1] text-lg font-semibold mb-4 tracking-widest uppercase">
              Keunggulan Kami
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce={true} delay={200}>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-12">
              Mengapa Memilih Ais Elektronik?
            </h2>
          </Fade>

          {/* USP Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {uspData.map((usp, index) => (
              <Fade
                direction="up"
                triggerOnce={true}
                delay={index * 200} // Animasi berurutan
                key={index}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between h-full border-t-4 border-transparent hover:border-[#1B71A1]">
                  {/* Icon */}
                  <div className="w-20 h-20 flex items-center justify-center bg-[#1B71A1] rounded-full mb-6">
                    <Image
                      src={usp.icon}
                      alt={`Ikon ${usp.title}`}
                      width={48}
                      height={48}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-black mb-4 text-center">
                    {usp.title}
                  </h3>

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
    </>
  );
};

export default USPSection;

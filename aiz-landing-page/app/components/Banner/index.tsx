"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import React, { useState } from 'react';


const Banner = () => {

    const whatsappNumber = "6285716294985"; // Nomor WhatsApp
    const whatsappMessage = "Halo, saya tertarik dengan layanan Aiz Elektronik. Mohon informasi lebih lanjut!"; // Pesan default
    const [isHovered, setIsHovered] = React.useState(false); // State untuk hover ikon

  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-20 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-black lg:text-start text-center">
                Solusi Terbaik <br /> untuk Perbaikan Elektronik Anda
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-gray-700 lg:text-lg text-base font-normal mb-10 lg:text-start text-center">
                Aiz Elektronik adalah penyedia jasa servis elektronik terpercaya
                di Jakarta Barat. Kami melayani berbagai kebutuhan perbaikan
                elektronik rumah tangga dan kantor.
              </p>
            </Fade>
            <Fade
                direction={"up"}
                delay={1000}
                cascade
                damping={1e-1}
                triggerOnce={true}
                >
                <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
    {/* Tombol WhatsApp */}
    <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-white bg-[#1B71A1] py-4 px-8 rounded-full hover:bg-white hover:text-[#1B71A1] border hover:border-[#1B71A1] shadow-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <Image
            src={isHovered ? '/images/Navbar/whatsapp.svg' : '/images/Navbar/whatsapp-2.svg'}
            alt="phone-image"
            width={20}
            height={20}
        />
        <span className="text-lg font-semibold">Hubungi</span>
    </a>

    {/* Tombol Info Lebih Lanjut */}
    <Link
        href="#cook-section"
        className="flex items-center justify-center border border-[#1B71A1] py-4 px-8 rounded-full text-lg font-medium text-[#1B71A1] hover:text-white hover:bg-[#1B71A1] shadow-lg transition-all duration-300 w-full md:w-auto"
    >
        Info lebih lanjut
    </Link>
</div>

                </Fade>
          </div>

          {/* Right Content */}
          <div className="col-span-6 flex justify-center relative">
            <div className="absolute bg-white p-4 flex items-center gap-4 bottom-10 left-10 rounded-xl shadow-lg">
              <Image
                src={"/images/Banner/client.svg"}
                alt="client-icon"
                width={48}
                height={48}
              />
              <div>
                <p className="text-lg font-semibold text-black">100+</p>
                <p className="text-sm font-normal text-gray-700">
                  Klien Terpercaya
                </p>
              </div>
            </div>
            <Image
              src="/images/Banner/banner-image.png"
              alt="banner-image"
              width={800}
              height={600}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

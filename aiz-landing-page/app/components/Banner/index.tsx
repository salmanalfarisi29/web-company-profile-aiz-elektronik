"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  const whatsappNumber = "6285716294985";
  const whatsappMessage =
    "Halo, saya tertarik dengan layanan Aiz Elektronik. Mohon informasi lebih lanjut!";
  const [isHovered, setIsHovered] = React.useState(false);

  const carouselData = [
    {
      image: "/images/Banner/banner-image-1.png",
      title: "Konsultasi Gratis",
      description: "",
    },
    {
      image: "/images/Banner/banner-image-2.png",
      title: "Layanan Antar-Jemput Barang",
      description: "",
    },
    {
      image: "/images/Banner/banner-image-3.png",
      title: "Bisa Melayani di Tempat (On-Site)",
      description: "",
    },
    {
      image: "/images/Banner/banner-image-4.png",
      title: "Banyak Promo dan Diskon",
      description: "",
    },
  ];

  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-20 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-black lg:text-start text-center">
              Solusi Terbaik <br /> untuk Perbaikan Elektronik Anda
            </h1>
            <p className="text-gray-700 lg:text-lg text-base font-normal mb-10 lg:text-start text-center">
              Aiz Elektronik adalah penyedia jasa servis elektronik terpercaya
              di Jakarta Barat. Kami melayani berbagai kebutuhan perbaikan
              elektronik rumah tangga dan kantor.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white bg-[#1B71A1] py-4 px-8 rounded-full hover:bg-white hover:text-[#1B71A1] border hover:border-[#1B71A1] shadow-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={
                    isHovered
                      ? "/images/Navbar/whatsapp.svg"
                      : "/images/Navbar/whatsapp-2.svg"
                  }
                  alt="phone-image"
                  width={20}
                  height={20}
                />
                <span className="text-lg font-semibold">Hubungi</span>
              </a>
              <Link
                href="#cook-section"
                className="flex items-center justify-center border border-[#1B71A1] py-4 px-8 rounded-full text-lg font-medium text-[#1B71A1] hover:text-white hover:bg-[#1B71A1] shadow-lg transition-all duration-300 w-full md:w-auto"
              >
                Info lebih lanjut
              </Link>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="col-span-6">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {carouselData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex justify-center items-center overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={item.image}
                    alt={`banner-${index}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-lg font-light text-center max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fade } from "react-awesome-reveal"; // Tambahkan ini jika menggunakan react-awesome-reveal

const ClientLogos = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet dan desktop kecil
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Layar tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Layar mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    { src: "/images/Clients/1.png", name: "Pertamina" },
    { src: "/images/Clients/2.png", name: "Bank Indonesia" },
    { src: "/images/Clients/3.png", name: "Kedubes Denmark" },
    { src: "/images/Clients/4.png", name: "Kedubes Aljazair" },
    { src: "/images/Clients/5.png", name: "Trans Hotel Group" },
    { src: "/images/Clients/6.png", name: "PT Jaya Konstruksi" },
    { src: "/images/Clients/7.png", name: "Buana Finance" },
    { src: "/images/Clients/8.png", name: "PT MSIG" },
    { src: "/images/Clients/9.png", name: "PT Kinden Indonesia" },
  ];

  return (
    <div className="my-16 px-4" id="client-section">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-2">
        Klien Kami
      </h2>
      <p className='text-grey lg:text-lg font-normal lg text-center'>Berikut adalah beberapa klien kami :</p>
      <Fade direction="up" triggerOnce={true} cascade>
        <div className="overflow-hidden">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="px-4" // Berikan padding antar slide
              >
                <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 h-56">
                  {/* Logo */}
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-md mb-4">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  {/* Text */}
                  <p className="text-center text-lg font-medium text-gray-700">
                    {logo.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </div>
  );
};

export default ClientLogos;

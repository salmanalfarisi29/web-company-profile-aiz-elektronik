"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./ClientLogos.module.css";

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
  };

  const logos = [
    { src: "/images/Clients/1.png", name: "Pertamina" },
    { src: "/images/Clients/2.png", name: "Bank Indonesia" },
    { src: "/images/Clients/3.png", name: "Kedubes Denmark" },
    { src: "/images/Clients/4.png", name: "Kedubes Aljazair" },
    { src: "/images/Clients/5.png", name: "Trans Hotel Group" },
  ];

  return (
    <div className="my-40">
      <h2 className="text-center text-2xl font-semibold mb-6">Klien Kami</h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center scale-200 max-w-xs"
            >
              <div className="w-24 h-24 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <p className="text-lg font-medium text-black-800 mt-2">
                  {logo.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientLogos;

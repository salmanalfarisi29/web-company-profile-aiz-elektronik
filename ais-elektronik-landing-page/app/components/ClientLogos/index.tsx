// Update to Client Logos Component for better SEO
"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
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
    <>
      <Head>
        <title>Klien Kami - Ais Elektronik</title>
        <meta
          name="description"
          content="AIS Elektronik dipercaya oleh berbagai perusahaan terkemuka seperti Pertamina, Bank Indonesia, dan Kedubes Denmark untuk perbaikan elektronik mereka."
        />
      </Head>
      <div className="my-16 px-4" id="klien-kami">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-2">
          Klien Kami
        </h1>
        <p className="text-grey lg:text-lg font-normal text-center mb-8">
          Berikut adalah beberapa klien yang telah mempercayai kami:
        </p>
        <Fade direction="up" triggerOnce={true} cascade>
          <div className="overflow-hidden">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="px-4"
                >
                  <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 h-56">
                    {/* Logo */}
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-md mb-4">
                      <Image
                        src={logo.src}
                        alt={`Logo ${logo.name}`}
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
    </>
  );
};

export default ClientLogos;

"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Cook = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-20 px-6">
        {/* Section 1: Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 lg:space-x-5">
          {/* Carousel */}
          <div className="col-span-6">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/images/Cook/service-ac.png"
                  alt="image-1"
                  width={636}
                  height={808}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/Cook/service-ac (2).png"
                  alt="image-2"
                  width={636}
                  height={808}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/Cook/service-audio.png"
                  alt="image-3"
                  width={636}
                  height={808}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Section 2: Teks */}
          <div className="col-span-6 flex flex-col justify-center lg:px-10">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <h2 className="text-[#1B71A1] text-lg font-normal mb-6 ls-51 uppercase text-start">
                Tentang Ais Elektronik
              </h2>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-6 text-start">
                Elektronik Rusak? Ais Elektronik Solusinya!
              </h3>
            </Fade>
            <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce>
              <p className="text-black md:text-lg font-normal mb-8 text-start">
                Ais Elektronik adalah perusahaan yang bergerak di bidang jasa
                servis elektronik. Kami melayani perbaikan dan pemeliharaan
                perangkat elektronik kantor seperti mesin penghancur kertas,
                mesin penghitung uang, mesin absensi, serta perangkat rumah
                tangga seperti TV LED, dan lainnya.
              </p>
              <p className="text-black md:text-lg font-normal mb-12 text-start">
                Dengan tim teknisi berpengalaman, kami berkomitmen untuk
                memberikan layanan terbaik kepada pelanggan.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-[#1B71A1] lg:px-10 hover:bg-white hover:text-[#1B71A1] border border-[#1B71A1] transition-all duration-300">
                  <Link href="#about-section">Layanan Kami</Link>
                </button>
              </div>
            </Fade>
          </div>
        </div>

        {/* Section 3: Spasi Tambahan untuk Pemisah */}
        <div className="py-10"></div>
      </div>
    </div>
  );
};

export default Cook;

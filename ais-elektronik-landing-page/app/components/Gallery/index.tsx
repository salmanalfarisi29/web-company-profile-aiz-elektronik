"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade direction={"up"} delay={400} cascade damping={1e-1} triggerOnce={true}>
            <h2 className="text-[#1B71A1] text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Galeri
            </h2>
          </Fade>
          <Fade direction={"up"} delay={800} cascade damping={1e-1} triggerOnce={true}>
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Galeri dari Kegiatan Kami.
            </h3>
          </Fade>
        </div>

        <Fade direction={"up"} delay={1200} cascade damping={1e-1} triggerOnce={true}>
        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          {/* Gambar Besar */}
          <div
            className="col-span-6 flex justify-center overflow-hidden rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal("/images/Gallery/service2.jpg")}
          >
            <Image
              src="/images/Gallery/service2.jpg"
              alt="service-image-1"
              width={1000}
              height={805}
              className="inner-img"
            />
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              {/* Gambar Atas */}
              <div
                className="row-span-1 overflow-hidden rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openModal("/images/Gallery/service5.jpg")}
              >
                <Image
                  src="/images/Gallery/service5.jpg"
                  alt="service-image-2"
                  width={700}
                  height={405}
                  className="inner-img"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Gambar Kiri */}
                <div
                  className="overflow-hidden rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal("/images/Gallery/service3.jpg")}
                >
                  <Image
                    src="/images/Gallery/service3.jpg"
                    alt="service-image-3"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
                {/* Gambar Kanan */}
                <div
                  className="overflow-hidden rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal("/images/Gallery/service4.jpg")}
                >
                  <Image
                    src="/images/Gallery/service4.jpg"
                    alt="service-image-4"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fade>
        {/* Modal */}
        {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={(e) => {
            // Tutup modal hanya jika pengguna mengklik overlay, bukan modal konten
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          {/* Tombol Close di Luar Modal */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold bg-gray-800 bg-opacity-70 rounded-full p-3 hover:bg-opacity-100 transition duration-300"
          >
            &times;
          </button>
          {/* Kontainer Modal */}
          <div className="relative bg-white rounded-lg p-6 shadow-2xl w-[90%] max-w-3xl">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1000}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Gallery;

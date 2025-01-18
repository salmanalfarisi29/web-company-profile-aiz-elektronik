"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Location = () => {
  return (
    <div id="location-section" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <Fade direction="up" triggerOnce>
            <h2 className="text-[#1B71A1] text-lg font-normal mb-3 tracking-widest uppercase">
              Lokasi Kami
            </h2>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Temukan Kami di Lokasi Berikut
            </h3>
          </Fade>
          <Fade direction="up" delay={400} triggerOnce>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Klik pada peta untuk
              mendapatkan petunjuk arah langsung melalui Google Maps.
            </p>
          </Fade>
        </div>

        {/* Map Section */}
        <Fade direction="up" delay={600} triggerOnce>
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=-6.200000,106.816666&z=15&output=embed"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              className="rounded-3xl border-0"
              title="Lokasi Kami"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
              <h4 className="text-black text-lg font-semibold">
                Lokasi Kantor Kami
              </h4>
              <p className="text-gray-700 text-sm">
                <strong>Alamat:</strong> Jl. H. Mandor Salim, RT.04/02/RW.no 11, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630
              </p>
              <a
                href="https://maps.app.goo.gl/17LzyiFXfGiW9JCcA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Location;

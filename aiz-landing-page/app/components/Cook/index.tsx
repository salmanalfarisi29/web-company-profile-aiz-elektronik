"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Cook = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: 1, // Scroll otomatis ke kanan
                    behavior: "smooth"
                });
            }
        }, 20); // Kecepatan scroll (20ms per langkah)

        return () => clearInterval(scrollInterval); // Membersihkan interval saat komponen di-unmount
    }, []);

    return (
        <div className="relative" id="cook-section">
            <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-2 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
                    {/* Galeri Scroll */}
                    <div
                        className="col-span-6 flex overflow-x-auto scrollbar-hidden space-x-5"
                        ref={scrollContainerRef}
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {/* Gambar Galeri */}
                        <Image src="/images/Cook/service-ac.png" alt="image-1" width={636} height={808} />
                        <Image src="/images/Cook/service-ac (2).png" alt="image-2" width={636} height={808} />
                        <Image src="/images/Cook/service-audio.png" alt="image-3" width={636} height={808} />
                        <Image src="/images/Cook/service-dinamo.png" alt="image-4" width={636} height={808} />
                        <Image src="/images/Cook/service-dispenser.png" alt="image-4" width={636} height={808} />
                    </div>

                    <div className="col-span-6 flex flex-col justify-center">
                        <Fade direction={"up"} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className="text-[#1B71A1] text-lg font-normal mb-3 ls-51 uppercase text-start">
                                Tentang Aiz Elektronik
                            </h2>
                        </Fade>
                        <Fade direction={"up"} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                                Elektronik Rusak? Aiz Elektronik Solusinya!
                            </h3>
                        </Fade>
                        <Fade direction={"up"} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                                Aiz Elektronik adalah perusahaan yang bergerak di bidang jasa servis elektronik. Kami
                                melayani perbaikan dan pemeliharaan perangkat elektronik kantor seperti mesin
                                penghancur kertas, mesin penghitung uang, mesin absensi, serta perangkat rumah tangga
                                seperti mesin cuci, TV LED, dan lainnya.
                            </p>
                            <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                                Dengan tim teknisi berpengalaman, kami berkomitmen untuk memberikan layanan terbaik
                                kepada pelanggan.
                            </p>
                            <div className="flex align-middle justify-center md:justify-start">
                                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-[#1B71A1] lg:px-10 mr-6 hover:bg-white hover:text-[#1B71A1] border border-[#1B71A1] transition-all duration-300">
                                    <Link href="#about-section">Layanan</Link>
                                </button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cook;

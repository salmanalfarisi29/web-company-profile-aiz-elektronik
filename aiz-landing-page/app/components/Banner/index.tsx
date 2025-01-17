"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';


const Banner = () => {

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-black md:4px lg:text-start text-center">
                                Solusi Terbaik <br /> untuk Perbaikan Elektronik Anda
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>Aiz Elektronik adalah penyedia jasa servis elektronik terpercaya di Jakarta Barat. <br /> Kami melayani berbagai kebutuhan perbaikan elektronik rumah tangga dan kantor.</p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                {/* <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'><Link href='#cook-section'>Hubungi Sekarang</Link></button> */}
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-[#1B71A1] justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-[#1B71A1] hover:text-white hover:bg-[#1B71A1] transition-all duration-300'>
                                    <Link href='#cook-section'>Cari Tau Lebih Lanjut</Link>
                                </button>

                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                        <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                            <Image src={'/images/Banner/client.svg'} alt="client-image" width={68} height={68} />
                            <p className='text-lg font-normal'>lebih dari 20+ <br /> Client.</p>
                        </div>
                        <Image src="/images/Banner/banner-image.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

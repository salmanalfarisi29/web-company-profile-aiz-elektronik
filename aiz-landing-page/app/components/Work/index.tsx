"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/images/Features/elektronik.svg',
        heading: "Elektronik Rumahan",
        subheading: "Melayani service mesin cuci, TV, kulkas dll",
    },
    {
        imgSrc: '/images/Features/mesin.svg',
        heading: "Mesin-mesin",
        subheading: "Melayani service mesin penghancur kertas, penghitung uang, dan absensi",
    },
    {
        imgSrc: '/images/Features/audio-sound-system.svg',
        heading: "Audio dan Sound System",
        subheading: "Melayani service audio dan sound system",
    },
    {
        imgSrc: '/images/Features/dispenser.svg',
        heading: "Alat elektronik yang lainnya",
        subheading: "Service berbagai macam alat elektronik yang lainnya",
    }
]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl py-20 px-6' id="about-section">
                <div className='text-center'>
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-[#1B71A1] text-lg font-normal mb-3 ls-51 uppercase'>Layanan</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-xl lg:text-3xl font-semibold text-black'>
                            Kami melayani berbagai service perangkat elektronik.<br /> Diantaranya :</p>
                    </Fade>
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-16'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center mx-auto'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={96} height={96} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-8'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                                <div className='flex items-center justify-center'>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Work;

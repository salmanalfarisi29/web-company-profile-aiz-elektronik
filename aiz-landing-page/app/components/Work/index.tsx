"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/Features/elektronik.svg",
    heading: "Elektronik Rumahan",
    subheading: "Melayani service mesin cuci, TV, kulkas dll",
  },
  {
    imgSrc: "/images/Features/mesin.svg",
    heading: "Mesin-mesin",
    subheading: "Melayani service mesin penghancur kertas, penghitung uang, dan absensi",
  },
  {
    imgSrc: "/images/Features/audio-sound-system.svg",
    heading: "Audio dan Sound System",
    subheading: "Melayani service audio dan sound system",
  },
  {
    imgSrc: "/images/Features/dispenser.svg",
    heading: "Alat elektronik yang lainnya",
    subheading: "Service berbagai macam alat elektronik yang lainnya",
  },
];

const Work = () => {
  return (
    <div className="bg-gray-50 py-20" id="about-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <Fade direction={"up"} delay={400} cascade damping={0.1} triggerOnce={true}>
            <h3 className="text-[#1B71A1] text-lg font-normal mb-3 tracking-wider uppercase">
              Layanan
            </h3>
          </Fade>
          <Fade direction={"up"} delay={800} cascade damping={0.1} triggerOnce={true}>
            <p className="text-xl lg:text-3xl font-semibold text-black">
              Kami melayani berbagai service perangkat elektronik.<br /> Diantaranya:
            </p>
          </Fade>
        </div>

        {/* Card Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 mt-16">
            <Fade direction={"up"} delay={1000} cascade damping={0.1} triggerOnce={true}>
                {cardData.map((items, i) => (
                <div
                    className="card-b p-8 relative rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 bg-white flex flex-col justify-between h-full"
                    key={i}
                >
                    <div className="work-img-bg rounded-full flex justify-center items-center mx-auto bg-[#f1f7ff] p-4">
                    <Image src={items.imgSrc} alt={items.imgSrc} width={96} height={96} />
                    </div>
                    <h3 className="text-2xl text-black font-semibold text-center mt-8">{items.heading}</h3>
                    <p className="text-lg font-normal text-gray-600 text-center mt-2">{items.subheading}</p>
                </div>
                ))}
            </Fade>
            </div>
      </div>
    </div>
  );
};

export default Work;

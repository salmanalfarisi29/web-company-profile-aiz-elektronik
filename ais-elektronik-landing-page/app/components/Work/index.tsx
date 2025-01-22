"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface CardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const cardData: CardDataType[] = [
  {
    imgSrc: "/images/Features/dispenser.svg",
    heading: "Elektronik Rumahan",
    subheading: "Melayani service TV, dispenser, dan lain-lain.",
  },
  {
    imgSrc: "/images/Features/mesin.svg",
    heading: "Mesin-mesin",
    subheading:
      "Melayani service mesin penghancur kertas, penghitung uang, dan absensi.",
  },
  {
    imgSrc: "/images/Features/audio-sound-system.svg",
    heading: "Audio dan Sound System",
    subheading: "Melayani service audio dan sound system.",
  },
  {
    imgSrc: "/images/Features/elektronik.svg",
    heading: "Alat Elektronik Lainnya",
    subheading: "Service berbagai macam alat elektronik lainnya.",
  },
];

const Work = () => {
  return (
    <div className="bg-gray-50 py-20" id="about-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Fade direction={"up"} delay={400} cascade damping={0.1} triggerOnce={true}>
            <h3 className="text-[#1B71A1] text-lg font-medium tracking-wider uppercase">
              Layanan
            </h3>
          </Fade>
          <Fade direction={"up"} delay={800} cascade damping={0.1} triggerOnce={true}>
            <p className="text-xl lg:text-3xl font-semibold text-black leading-relaxed">
              Kami melayani berbagai service perangkat elektronik. <br /> Di antaranya:
            </p>
          </Fade>
        </div>

        {/* Card Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          <Fade direction={"up"} delay={1000} cascade damping={0.1} triggerOnce={true}>
            {cardData.map((item, index) => (
              <div
                key={index}
                className="p-8 relative rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 bg-white flex flex-col items-center text-center h-full"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#f1f7ff] flex items-center justify-center mb-6">
                  <Image src={item.imgSrc} alt={item.heading} width={48} height={48} />
                </div>
                {/* Heading */}
                <h3 className="text-2xl text-black font-semibold mb-4">{item.heading}</h3>
                {/* Subheading */}
                <p className="text-lg text-gray-600">{item.subheading}</p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://twitter.com",
    width: 14,
  },
];

const companyLinks = [
  { name: "Beranda", href: "#home-section" },
  { name: "Tentang Kami", href: "#cook-section" },
  { name: "Layanan", href: "#about-section" },
  { name: "Klien", href: "#client-section" },
  { name: "Lokasi", href: "#location-section" },
  { name: "Galeri", href: "#gallery-section" },
];

const whatsappNumber = "6285716294985";
const whatsappMessage =
  "Halo, saya tertarik dengan layanan Aiz Elektronik. Mohon informasi lebih lanjut!";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-2xl pt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}
        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex items-center">
            <Image src="/images/Logo/Logo.svg" alt="logo" width={56} height={56} />
            <Link href="/" className="text-2xl font-semibold text-black ml-4">
              Aiz Elektronik.
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-5 mb-8">
            Cepat, Andal, dan Profesional dalam Perbaikan Elektronik.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                <div className="bg-white h-10 w-10 shadow-xl rounded-full flex items-center justify-center hover:bg-[#1B71A1] transition duration-300">
                  <Image src={item.imgSrc} alt={item.imgSrc} width={item.width} height={10} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className="sm:col-span-2">
          <h4 className="text-black text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-gray-600 text-base hover:text-black transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN-3 */}
        <div className="sm:col-span-2">
          <h4 className="text-black text-xl font-semibold mb-4">Hubungi</h4>
          <ul className="space-y-2">
            <li>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-base hover:text-black transition"
              >
                Via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 mb-4 border-t border-gray-200 pt-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ais Elektronik. All rights reserved. - Developed by Creanzy.id
        </p>
      </div>
    </footer>
  );
};

export default Footer;

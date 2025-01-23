import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { name: "Beranda", href: "#home-section" },
  { name: "Tentang Kami", href: "#About-section" },
  { name: "Layanan", href: "#about-section" },
  // { name: "Klien", href: "#client-section" },
  { name: "Lokasi", href: "#location-section" },
  { name: "Galeri", href: "#gallery-section" },
];

const whatsappNumber = "6285716294985";
const whatsappMessage =
  "Halo, saya tertarik dengan layanan Ais Elektronik. Mohon informasi lebih lanjut!";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
          {/* COLUMN-1: Logo, Deskripsi, dan Alamat */}
          <div className="sm:col-span-6 lg:col-span-5">
            <div className="flex items-center">
              <Image src="/images/Logo/Logo.svg" alt="logo" width={56} height={56} />
              <Link href="/" className="text-2xl font-semibold text-black ml-4">
                Ais Elektronik
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              Cepat, Andal, dan Profesional dalam Perbaikan Elektronik.
            </p>
            <p className="text-black-600 text-sm mt-4 font-semibold">
              Alamat
            </p>
            <p className="text-gray-600 text-sm">
              Jl. H. Mandor Salim, RT.04/02/RW.no 11, Srengseng, Kec. Kembangan
              <br/>
              Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630
            </p>
          </div>

          {/* COLUMN-2: Company Links */}
          <div className="sm:col-span-2">
            <h4 className="text-black text-lg font-semibold mb-2">Section</h4>
            <ul className="space-y-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-3: Kontak */}
          <div className="sm:col-span-2">
            <h4 className="text-black text-lg font-semibold mb-2">Hubungi</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-black transition"
                >
                  Via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ais Elektronik. All rights reserved. - Developed by Creanzy.id
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

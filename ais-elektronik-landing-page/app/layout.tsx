// Update to layout.tsx for better SEO
import Head from 'next/head';
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Jasa Service Elektronik - Ais Elektronik Jakarta Barat',
  description: 'Ais Elektronik adalah perusahaan jasa servis elektronik terpercaya di Jakarta Barat. Kami melayani perbaikan perangkat elektronik kantor seperti mesin penghancur kertas, penghitung uang, absensi, dan elektronik rumah tangga seperti mesin cuci, TV LED, audio sound system, dan lainnya.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="jasa service elektronik, servis elektronik kantor, perbaikan mesin penghancur kertas, perbaikan kulkas, servis elektronik rumah tangga, service elektronik Jakarta Barat, jasa service elektronik Srengseng Jakarta Barat, service elektronik daerah jakarta barat, service elektronik kembangan, service elektronik jakarta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="google-site-verification" content="7XG5xah7eiec9pxSJYDy4BD7ZXiSYUsIBdRq" /> */}
        <link rel="canonical" href="https://ais-elektronik.vercel.app/" />
        {/* <link rel="canonical" href="https://www.ais-elektronik.com" /> */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.ais-elektronik.com" /> */} 
        <meta property="og:url" content="https://ais-elektronik.vercel.app/" />
        <meta property="og:image" content="/images/Banner/banner-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ais Elektronik",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. H. Mandor Salim, Srengseng, Kec. Kembangan",
              "addressLocality": "Jakarta Barat",
              "postalCode": "11630",
              "addressCountry": "ID"
            },
            "telephone": "+6285716294985",
            "email": "info@ais-elektronik.com",
            "url": "https://ais-elektronik.vercel.app/",
            "openingHours": "Mo-Fr 09:00-17:00",
            // "image": "https://www.ais-elektronik.com/images/Banner/banner-image.png"
            "image": "https://ais-elektronik.vercel.app/images/Banner/banner-image-1.png"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Apa saja layanan yang ditawarkan Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ais Elektronik menawarkan layanan perbaikan dan pemeliharaan perangkat elektronik kantor seperti mesin penghancur kertas, penghitung uang, mesin absensi, serta perangkat elektronik rumah tangga seperti mesin cuci, kulkas, TV LED, dan audio sound system."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah Ais Elektronik melayani perbaikan di rumah pelanggan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, Ais Elektronik menyediakan layanan perbaikan langsung di rumah pelanggan untuk wilayah Jakarta Barat dan sekitarnya."
                }
              },
              {
                "@type": "Question",
                "name": "Bagaimana cara menghubungi Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Anda dapat menghubungi Ais Elektronik melalui nomor telepon +6285716294985 atau email info@ais-elektronik.com."
                }
              },
              {
                "@type": "Question",
                "name": "Dimana lokasi Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ais Elektronik berlokasi di Jl. H. Mandor Salim, Srengseng, Kec. Kembangan, Jakarta Barat, 11630."
                }
              },
              {
                "@type": "Question",
                "name": "Dimana service elektronik Jakarta Barat yang murah?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ais Elektronik menawarkan layanan service elektronik murah di Jakarta Barat dengan kualitas terbaik dan teknisi berpengalaman."
                }
              },
              {
                "@type": "Question",
                "name": "Mengapa memilih Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ais Elektronik memiliki tim teknisi berpengalaman, menggunakan peralatan modern, dan menyediakan layanan perbaikan yang cepat, efisien, serta harga yang kompetitif."
                }
              },
              {
                "@type": "Question",
                "name": "Apa keuntungan menggunakan layanan Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keuntungan menggunakan layanan Ais Elektronik termasuk konsultasi gratis, layanan antar-jemput barang, dan promo menarik untuk pelanggan setia."
                }
              },
              {
                "@type": "Question",
                "name": "Dimana tempat service elektronik terpercaya di Jakarta Barat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ais Elektronik adalah tempat terpercaya untuk perbaikan perangkat elektronik di Jakarta Barat. Dengan teknisi berpengalaman dan layanan profesional, kami memastikan perbaikan berkualitas."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah ada layanan perbaikan elektronik rumah tangga di Jakarta Barat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, Ais Elektronik melayani perbaikan berbagai perangkat rumah tangga seperti mesin cuci, TV LED, dan kulkas untuk wilayah Jakarta Barat."
                }
              },
              {
                "@type": "Question",
                "name": "Berapa biaya service elektronik di Jakarta Barat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Biaya service elektronik di Ais Elektronik terjangkau dan kompetitif, tergantung pada jenis perangkat dan tingkat kerusakan."
                }
              },
              {
                "@type": "Question",
                "name": "Bagaimana cara memastikan perangkat elektronik saya diperbaiki dengan baik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ais Elektronik memastikan perangkat Anda diperbaiki dengan baik menggunakan teknisi berpengalaman dan peralatan modern. Kami juga memberikan garansi atas pekerjaan kami."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah ada layanan konsultasi gratis untuk perbaikan elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, Ais Elektronik menyediakan konsultasi gratis untuk membantu pelanggan memahami masalah pada perangkat mereka sebelum memutuskan untuk melakukan perbaikan."
                }
              }
            ]
          })}
        </script>
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Head from 'next/head';
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Jasa Service Elektronik Jakarta Barat - Ais Elektronik | Teknisi Handal & Bergaransi',
  description: 'Ais Elektronik adalah penyedia layanan jasa service elektronik terbaik di Jakarta Barat. Kami melayani perbaikan TV, AC, kulkas, mesin cuci, dan berbagai perangkat elektronik rumah tangga dan kantor dengan teknisi berpengalaman dan garansi pengerjaan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Ais Elektronik Jakarta Barat" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="keywords" content="Ais Elektronik adalah penyedia layanan jasa service elektronik terbaik di Jakarta Barat. Kami melayani perbaikan TV, AC, kulkas, mesin cuci, dan berbagai perangkat elektronik rumah tangga dan kantor dengan teknisi berpengalaman dan garansi pengerjaan." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="id" />
        <link rel="canonical" href="https://ais-elektronik.vercel.app/" />
        <link rel="alternate" href="https://ais-elektronik.vercel.app/" hrefLang="id" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ais-elektronik.vercel.app/" />
        <meta property="og:image" content="/images/Banner/banner-image.png" />
        <meta property="og:site_name" content="Ais Elektronik" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/Banner/banner-image.png" />
        <meta name="twitter:site" content="@ais-elektronik" />

        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ais Elektronik",
            "image": "https://ais-elektronik.vercel.app/images/Banner/banner-image-1.png",
            "url": "https://ais-elektronik.vercel.app/",
            "telephone": "+6285716294985",
            "email": "info@ais-elektronik.com",
            "priceRange": "$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. H. Mandor Salim, Srengseng, Kec. Kembangan",
              "addressLocality": "Jakarta Barat",
              "postalCode": "11630",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-6.202737",
              "longitude": "106.772348"
            },
            "openingHours": "Mo-Fr 09:00-17:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "25"
            },
            "review": [
              {
                "@type": "Review",
                "author": "Budi Setiawan",
                "datePublished": "2023-12-20",
                "reviewBody": "Pelayanan sangat memuaskan! Teknisi ramah dan profesional. Sangat direkomendasikan untuk service elektronik di daerah Srengseng Kembangan Jakarta Barat.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              },
              {
                "@type": "Review",
                "author": "Siti Aminah",
                "datePublished": "2023-12-15",
                "reviewBody": "Harga terjangkau dan kualitas kerja luar biasa. Teknisi berpengalaman dan cepat tanggap.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.5"
                }
              }
            ]
          })}
        </script>

        {/* Schema.org FAQ Page */}
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
                  "text": "Ais Elektronik menawarkan perbaikan AC, TV LED, kulkas, mesin cuci, serta berbagai perangkat elektronik rumah tangga dan kantor di Jakarta Barat."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah Ais Elektronik melayani perbaikan di rumah pelanggan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, kami melayani service panggilan langsung ke rumah pelanggan di wilayah Jakarta Barat."
                }
              },
              {
                "@type": "Question",
                "name": "Berapa biaya service elektronik di Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Biaya service bervariasi tergantung jenis perangkat dan tingkat kerusakan. Hubungi kami untuk mendapatkan estimasi biaya."
                }
              },
              {
                "@type": "Question",
                "name": "Bagaimana cara menghubungi Ais Elektronik?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Anda bisa menghubungi kami via WhatsApp di +6285716294985 atau melalui email info@ais-elektronik.com."
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

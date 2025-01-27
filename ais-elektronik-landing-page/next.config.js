// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aiz-elektronik.vercel.app', 'your-custom-domain.com'], // Tambahkan domain Vercel Anda atau domain kustom
    formats: ['image/avif', 'image/webp'], // Gunakan format modern
  },
  reactStrictMode: true, // Aktifkan mode ketat
  swcMinify: true, // Optimasi dengan SWC
};

module.exports = nextConfig;


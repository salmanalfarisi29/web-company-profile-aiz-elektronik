module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"], // Pastikan format gambar modern diaktifkan
    loader: "default",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Encoding", value: "gzip" },
          { key: "Content-Encoding", value: "br" },
        ],
      },
    ];
  },
  experimental: {
    optimizeCss: true, // Mengoptimalkan Tailwind CSS
    scrollRestoration: true, // Menyimpan posisi scroll saat navigasi
  },
  revalidate: 60, // Incremental Static Regeneration (ISR), regenerasi halaman setiap 60 detik
};

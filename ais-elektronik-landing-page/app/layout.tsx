import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Ais Elektronik',
  description: 'AIS Elektronik - Jasa Service Elektronik Profesional di Jakarta Barat. Perbaikan AC, Kulkas, Mesin Cuci, dan lainnya dengan layanan cepat dan terpercaya',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

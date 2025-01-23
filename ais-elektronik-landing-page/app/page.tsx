import Banner from './components/Banner/index';
import Features from './components/Work/index';
import About from './components/About/index';
// import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
// import Newsletter from './components/Newsletter/Newsletter';
// import ClientLogos from "./components/ClientLogos";
import Lokasi from "./components/Lokasi";
import Ups from "./components/Ups";


export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Features />
      <Ups />
      {/* <ClientLogos /> */}
      <Lokasi />
      {/* <Expert /> */}
      <Gallery />
      {/* <Newsletter /> */}
    </main>
  )
}

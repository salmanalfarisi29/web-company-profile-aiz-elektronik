import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
// import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';
import ClientLogos from "./components/ClientLogos";
import Lokasi from "./components/Lokasi";


export default function Home() {
  return (
    <main>
      <Banner />
      <Cook />
      <Features />
      <ClientLogos />
      <Lokasi />
      {/* <Expert /> */}
      <Gallery />
      <Newsletter />
    </main>
  )
}

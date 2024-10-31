import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import FooterComp from "./components/FooterComp";
import ServiceComp from "./components/ServiceComp";
import GalleryComp from "./components/GalleryComp";
import FaqComp from "./components/FaqComp";
import ContactComp from "./components/ContactComp";
import Maps from "./components/maps";

function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <Maps />
      <GalleryComp />
      <ServiceComp />
      <FaqComp />
      <ContactComp />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;

import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import CardSpaList from "@/components/moleculs/SpaCardList";
import ServiceSelector from "@/components/moleculs/ServiceSelector";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";


export default function LandingPage() {

  return (
    <>
    <Navbar />
    <Hero />
    <WhyChooseUs/>
    <About/>
    <ServiceSelector />
    <CardSpaList />
    <Footer />
    </>
  );
}

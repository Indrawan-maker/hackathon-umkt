import Footer from "@/components/atoms/Footer";
import Hero from "@/components/atoms/Hero";
import Navbar from "@/components/atoms/Navbar";
import CardSpaList from "@/components/moleculs/SpaCardList";
import ServiceSelector from "@/components/moleculs/ServiceSelector";
import WhyChooseUs from "@/components/atoms/WhyChooseUs";
import About from "@/components/atoms/About";


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

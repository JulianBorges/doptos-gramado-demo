
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import RoomCarousel from "../components/RoomCarousel";
import ServicesSection from "../components/ServicesSection";
import AIExperienceSection from "../components/AIExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <Navigation />
      <HeroSection />
      <RoomCarousel />
      <ServicesSection />
      <AIExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

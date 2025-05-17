
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import RoomCarousel from "../components/RoomCarousel";
import ServicesSection from "../components/ServicesSection";
import AIExperienceSection from "../components/AIExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

const Index = () => {
  return (
    <div className="font-['Poppins']">
      <Navigation />
      <HeroSection />
      <RoomCarousel />
      <ServicesSection />
      <AIExperienceSection />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;

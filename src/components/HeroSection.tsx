
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.6), rgba(29, 78, 216, 0.6)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            Reserve com a IA Doptos 24h
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Atendimento personalizado, reservas simplificadas e experiências inesquecíveis na Serra Gaúcha
          </p>
          <Button 
            onClick={() => {
              // Scroll to rooms section
              const roomsSection = document.getElementById('rooms');
              if (roomsSection) {
                roomsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-doptos-cyan hover:bg-doptos-cyan/90 text-white px-8 py-6 text-lg rounded-md"
          >
            Explorar Quartos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Playfair_Display']">
            Reserve com nossa IA 24h
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Atendimento personalizado, reservas simplificadas e experiências inesquecíveis na Serra Gaúcha
          </p>
          <Button 
            onClick={() => {
              // Open the webchat
              const chatButton = document.getElementById('webchat-button');
              if (chatButton) {
                chatButton.click();
              }
            }}
            className="bg-hotel-gold hover:bg-hotel-gold/90 text-black px-8 py-6 text-lg rounded-md"
          >
            Fale com o agente agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

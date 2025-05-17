
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, CheckCircle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-hotel-gold" />,
    title: "Respostas instantâneas para todas as dúvidas",
    description: "Nosso agente de IA responde perguntas sobre acomodações, serviços, horários e políticas do hotel em segundos."
  },
  {
    icon: <Clock className="h-10 w-10 text-hotel-gold" />,
    title: "Check-in e check-out simplificados",
    description: "Faça seu pré check-in e agilize sua saída através de conversas naturais com nosso assistente virtual."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-hotel-gold" />,
    title: "Atendimento personalizado 24/7",
    description: "Assistência e recomendações adaptadas ao seu perfil, disponíveis a qualquer hora, sem espera."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-hotel-gold" />,
    title: "Sugestões e upgrades",
    description: "Receba opções de melhorias para sua estadia, pacotes especiais e experiências exclusivas baseadas em suas preferências."
  }
];

const AIExperienceSection = () => {
  const openWebchat = () => {
    const chatButton = document.getElementById('webchat-button');
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <section id="ai-experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-4">
            Experiência com IA
          </h2>
          <p className="text-gray-600">
            Nosso agente de inteligência artificial transforma a experiência dos hóspedes com atendimento
            personalizado e respostas instantâneas, 24 horas por dia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg hover:bg-hotel-light-gray transition-colors">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-hotel-wine to-hotel-gold p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Experimente agora mesmo!</h3>
          <p className="mb-6">
            Converse com nosso assistente virtual e veja como podemos transformar sua experiência em nosso hotel
          </p>
          <Button 
            onClick={openWebchat}
            className="bg-white text-hotel-wine hover:bg-gray-100 font-semibold px-8 py-6"
          >
            Testar o agente de IA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIExperienceSection;

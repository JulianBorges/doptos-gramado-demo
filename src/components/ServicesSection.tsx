
import { Check } from "lucide-react";

const services = [
  {
    title: "Café da Manhã Premium",
    description: "Buffet completo com produtos regionais da Serra Gaúcha, incluindo vinhos e espumantes locais.",
    included: true,
  },
  {
    title: "Spa & Bem-estar",
    description: "Massagens relaxantes, banhos aromáticos e tratamentos corporais com produtos da região.",
    included: true,
  },
  {
    title: "Transporte Local",
    description: "Serviço de transfer para o centro de Gramado e principais atrações da cidade.",
    included: true,
  },
  {
    title: "Concierge Virtual",
    description: "Nosso agente de IA disponível 24h para sugestões de passeios e restaurantes na região.",
    included: true,
  },
  {
    title: "Degustação de Vinhos",
    description: "Experiência exclusiva com os melhores vinhos das vinícolas locais.",
    included: true,
  },
  {
    title: "Wi-Fi de Alta Velocidade",
    description: "Conexão disponível em todas as áreas do hotel para seu conforto e produtividade.",
    included: true,
  }
];

const ServicesSection = () => {
  const openWebchat = () => {
    const chatButton = document.getElementById('webchat-button');
    if (chatButton) {
      chatButton.click();
    }
  };
  
  return (
    <section id="services" className="py-16 bg-hotel-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-['Playfair_Display'] font-bold text-center mb-4">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma experiência completa para tornar sua estadia na Serra Gaúcha memorável e confortável
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-hotel-gold hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-hotel-gold rounded-full p-1 mr-4 text-white">
                  <Check size={18} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              {service.included && (
                <div className="mt-4 text-hotel-wine font-medium text-sm">
                  Incluído em todas as reservas
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={openWebchat}
            className="text-hotel-gold hover:text-hotel-wine hover:underline font-medium"
          >
            Tem alguma dúvida sobre nossos serviços? Converse com nosso agente agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

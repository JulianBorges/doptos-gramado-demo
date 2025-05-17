
import { Check } from "lucide-react";

const services = [
  {
    title: "Spa & Bem-estar",
    description: "Massagens relaxantes, banhos aromáticos e tratamentos corporais com produtos da região.",
    included: true,
  },
  {
    title: "Restaurante Gourmet",
    description: "Gastronomia refinada com ingredientes locais e uma seleção de vinhos premiados.",
    included: true,
  },
  {
    title: "Eventos",
    description: "Espaços versáteis para reuniões corporativas, casamentos e celebrações especiais.",
    included: true,
  },
  {
    title: "Traslado",
    description: "Serviço de transfer para o centro de Gramado e principais atrações da cidade.",
    included: true,
  },
  {
    title: "Kids Club",
    description: "Espaço recreativo com monitores para crianças de todas as idades se divertirem.",
    included: true,
  },
  {
    title: "Sala Fitness",
    description: "Academia completa com equipamentos modernos para manter sua rotina de exercícios.",
    included: true,
  }
];

const ServicesSection = () => {
  const openWebchat = () => {
    const chatButton = document.getElementById('doptos-chat');
    if (chatButton) {
      chatButton.click();
    }
  };
  
  return (
    <section id="services" className="py-16 bg-doptos-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-4">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma experiência completa para tornar sua estadia na Serra Gaúcha memorável e confortável
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-doptos-blue hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-doptos-cyan rounded-full p-1 mr-4 text-white">
                  <Check size={18} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              {service.included && (
                <div className="mt-4 text-doptos-blue font-medium text-sm">
                  Incluído em todas as reservas
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={openWebchat}
            className="text-doptos-blue hover:text-doptos-cyan hover:underline font-medium"
          >
            Tem alguma dúvida sobre nossos serviços? Converse com nosso agente agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

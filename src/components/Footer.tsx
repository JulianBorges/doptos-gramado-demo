
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-doptos-cyan">Doptos</span> Hotel
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Localizado no coração de Gramado, oferecemos uma experiência única 
              na Serra Gaúcha com o melhor da hospitalidade e tecnologia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-doptos-cyan">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-doptos-cyan">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-doptos-cyan">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-doptos-cyan">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-doptos-cyan">Home</a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-doptos-cyan">Quartos & Tarifas</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-doptos-cyan">Serviços</a>
              </li>
              <li>
                <a href="#ai-experience" className="text-gray-300 hover:text-doptos-cyan">Experiência Doptos IA</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-doptos-cyan">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Av. das Hortênsias, 1234
              </li>
              <li className="text-gray-300">
                Gramado, RS - Brasil
              </li>
              <li className="text-gray-300">
                reservas@doptoshotel.com.br
              </li>
              <li className="text-gray-300">
                +55 (54) 9999-9999
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Doptos Hotel. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 text-sm mr-2">Powered by</span>
            <span className="text-doptos-cyan font-bold">Doptos AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

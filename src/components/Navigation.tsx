
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Home, Bed, Info, Phone, Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "rooms", icon: <Bed size={20} />, label: "Quartos & Tarifas" },
    { id: "services", icon: <Info size={20} />, label: "Serviços" },
    { id: "ai-experience", icon: <Info size={20} />, label: "Experiência de IA" },
    { id: "contact", icon: <Phone size={20} />, label: "Contato" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={cn(
            "text-2xl font-bold font-['Playfair_Display']",
            isScrolled ? "text-hotel-teal" : "text-white"
          )}>
            <span className="text-hotel-gold">Doptos</span> Hotel
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center space-x-1 transition-colors",
                isScrolled 
                  ? "text-gray-700 hover:text-hotel-gold" 
                  : "text-white hover:text-hotel-gold"
              )}
            >
              <span className="text-hotel-gold">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden",
            isScrolled ? "text-gray-800" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 w-full py-3 border-b text-gray-700"
              >
                <span className="text-hotel-gold">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

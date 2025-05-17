
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "1",
    roomType: "standard",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulando envio para endpoint fictício
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted with data:", formData);
      
      toast({
        title: "Pré-reserva enviada!",
        description: "Entraremos em contato em breve para confirmar sua reserva.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        guests: "1",
        roomType: "standard",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-hotel-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-['Playfair_Display'] font-bold text-center mb-4">
          Faça sua Pré-reserva
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Preencha o formulário abaixo para iniciar sua pré-reserva ou tirar dúvidas sobre nosso hotel
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="elegant-input w-full"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="elegant-input w-full"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="elegant-input w-full"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de quarto</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="elegant-input w-full"
                >
                  <option value="standard">Quarto Standard</option>
                  <option value="luxo">Quarto Luxo</option>
                  <option value="master">Suíte Master</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data de check-in</label>
                <input
                  type="date"
                  name="checkin"
                  required
                  value={formData.checkin}
                  onChange={handleChange}
                  className="elegant-input w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data de check-out</label>
                <input
                  type="date"
                  name="checkout"
                  required
                  value={formData.checkout}
                  onChange={handleChange}
                  className="elegant-input w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de hóspedes</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="elegant-input w-full"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num.toString()}>
                      {num} {num === 1 ? 'hóspede' : 'hóspedes'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem ou pedidos especiais</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="elegant-input w-full"
                placeholder="Se tiver alguma solicitação especial, informe aqui..."
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-hotel-gold hover:bg-hotel-gold/90 text-black font-medium text-lg px-8 py-6 w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar pré-reserva"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

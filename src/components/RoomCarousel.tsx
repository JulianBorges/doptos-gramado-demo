import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomImageProps {
  src: string;
  alt: string;
}

interface RoomProps {
  id: string;
  name: string;
  price: number;
  description: string;
  amenities: string[];
  images: RoomImageProps[];
}

const rooms: RoomProps[] = [
  {
    id: 'standard',
    name: 'Quarto Standard',
    price: 289,
    description: 'Conforto e praticidade em um espaço acolhedor com vista para o jardim. Ideal para casais e viajantes a negócios.',
    amenities: ['Wi-Fi Grátis', 'TV 42"', 'Ar-condicionado', 'Frigobar', 'Café da manhã incluso'],
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
        alt: 'Quarto Standard' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80', 
        alt: 'Banheiro Standard' 
      }
    ]
  },
  {
    id: 'luxo',
    name: 'Quarto Luxo',
    price: 459,
    description: 'Espaço amplo com mobília premium e vista panorâmica para as montanhas da Serra Gaúcha.',
    amenities: ['Wi-Fi Grátis', 'Smart TV 50"', 'Ar-condicionado', 'Frigobar', 'Cafeteira', 'Café da manhã incluso', 'Roupões'],
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 
        alt: 'Quarto Luxo' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1609946860748-8154961d5942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 
        alt: 'Banheiro Luxo' 
      }
    ]
  },
  {
    id: 'master',
    name: 'Suíte Master',
    price: 789,
    description: 'Nossa acomodação mais exclusiva, com sala de estar separada, banheira de hidromassagem e serviço personalizado.',
    amenities: ['Wi-Fi Grátis', 'Smart TV 65"', 'Ar-condicionado', 'Minibar premium', 'Máquina de café', 'Café da manhã incluso', 'Roupões de banho', 'Hidromassagem', 'Room service exclusivo'],
    images: [
      { 
        src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
        alt: 'Suíte Master' 
      },
      { 
        src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
        alt: 'Banheiro Suíte Master' 
      }
    ]
  }
];

const RoomCarousel: React.FC = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
  const currentRoom = rooms[currentRoomIndex];
  
  useEffect(() => {
    // Initialize image indexes
    const initialImageIndexes: Record<string, number> = {};
    rooms.forEach(room => {
      initialImageIndexes[room.id] = 0;
    });
    setCurrentImageIndex(initialImageIndexes);
  }, []);

  const nextRoom = () => {
    setCurrentRoomIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const prevRoom = () => {
    setCurrentRoomIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
  };

  const nextImage = (roomId: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % rooms.find(r => r.id === roomId)!.images.length
    }));
  };

  const prevImage = (roomId: string) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: (prev[roomId] - 1 + rooms.find(r => r.id === roomId)!.images.length) % rooms.find(r => r.id === roomId)!.images.length
    }));
  };

  const openChatWithRoomQuery = () => {
    // Open doptos-chat instead of webchat-button
    const chatButton = document.getElementById('doptos-chat');
    if (chatButton) {
      chatButton.click();
    }
    
    // In a real implementation, you would pass the room info to the chat
    console.log(`Consulta de disponibilidade para: ${currentRoom.name}`);
  };

  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12">
          Quartos <span className="text-doptos-cyan">&</span> Tarifas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Room Image Carousel */}
          <div className="relative room-carousel overflow-hidden rounded-lg shadow-lg">
            {currentRoom && currentImageIndex[currentRoom.id] !== undefined && (
              <>
                <img 
                  src={currentRoom.images[currentImageIndex[currentRoom.id]].src} 
                  alt={currentRoom.images[currentImageIndex[currentRoom.id]].alt}
                  className="w-full h-[400px] object-cover" 
                />
                
                {/* Image Navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {currentRoom.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-3 h-3 rounded-full ${idx === currentImageIndex[currentRoom.id] ? 'bg-doptos-blue' : 'bg-white/60'}`}
                      onClick={() => setCurrentImageIndex(prev => ({...prev, [currentRoom.id]: idx}))}
                    />
                  ))}
                </div>
                
                {/* Image Arrows */}
                {currentRoom.images.length > 1 && (
                  <>
                    <button 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
                      onClick={() => prevImage(currentRoom.id)}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
                      onClick={() => nextImage(currentRoom.id)}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </>
            )}
          </div>
          
          {/* Room Details */}
          <div className="bg-doptos-bg p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-playfair font-bold">{currentRoom.name}</h3>
              <div className="text-doptos-blue font-bold text-2xl">
                R$ {currentRoom.price}
                <span className="text-sm text-gray-600">/noite</span>
              </div>
            </div>
            
            <p className="mb-4 text-gray-700">{currentRoom.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Comodidades:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {currentRoom.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-doptos-cyan">•</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button 
                  onClick={prevRoom}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextRoom}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <Button
                onClick={openChatWithRoomQuery}
                className="bg-doptos-blue hover:bg-doptos-blue/90 text-white"
              >
                Consultar disponibilidade
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCarousel;

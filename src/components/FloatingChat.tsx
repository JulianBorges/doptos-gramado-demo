
import { useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    // Add an ID to the button for easy access from other components
    const button = document.getElementById('webchat-button');
    if (button) {
      button.id = 'webchat-button';
    }
  }, []);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl w-[350px] md:w-[400px] h-[500px] flex flex-col animate-fade-in">
          <div className="bg-hotel-gold text-black p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Assistente Doptos</h3>
            <button 
              onClick={toggleChat}
              className="text-black hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe 
              src="https://agent-demo.n8n.example/chat" 
              className="w-full h-full border-none"
              title="Doptos AI Chat"
            ></iframe>
          </div>
        </div>
      ) : (
        <button
          id="webchat-button"
          onClick={toggleChat}
          className="bg-[#FFA500] hover:bg-[#FFA500]/90 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingChat;

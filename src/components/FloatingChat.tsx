
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
    
    // Expose message functions for n8n integration
    window.addUserMessage = (text: string) => {
      const chatContainer = document.querySelector('.chat-messages');
      if (chatContainer) {
        const msgElement = document.createElement('div');
        msgElement.className = 'flex justify-end mb-3';
        msgElement.innerHTML = `
          <div class="bg-hotel-gold text-black rounded-lg py-2 px-4 max-w-[80%]">
            ${text}
          </div>
        `;
        chatContainer.appendChild(msgElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
    
    window.addBotMessage = (text: string) => {
      const chatContainer = document.querySelector('.chat-messages');
      if (chatContainer) {
        const msgElement = document.createElement('div');
        msgElement.className = 'flex justify-start mb-3';
        msgElement.innerHTML = `
          <div class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[80%]">
            ${text}
          </div>
        `;
        chatContainer.appendChild(msgElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
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
          <div className="flex-1 overflow-y-auto p-4 chat-messages">
            {/* Chat messages will be inserted here */}
          </div>
          <div className="border-t p-4">
            <textarea 
              id="chatInput"
              className="w-full border rounded-lg p-2 resize-none focus:outline-none focus:ring-1 focus:ring-hotel-gold"
              placeholder="Digite sua mensagem..."
              rows={2}
            ></textarea>
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

// Add the window type declarations
declare global {
  interface Window {
    addUserMessage: (text: string) => void;
    addBotMessage: (text: string) => void;
  }
}

export default FloatingChat;

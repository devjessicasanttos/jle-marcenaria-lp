import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostra a mensagem após 3 segundos para chamar a atenção
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      
      {/* BALÃO DE MENSAGEM */}
      {showTooltip && (
        <div className="relative mb-4 animate-in slide-in-from-right-10 duration-500">
          <div className="bg-white px-5 py-3 rounded-2xl shadow-2xl border border-neutral-200 max-w-[220px]">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-neutral-800 text-white rounded-full p-1 hover:bg-[#C62828] transition-colors"
            >
              <X size={10} />
            </button>
            
            <p className="font-montserrat text-xs text-neutral-800 leading-tight">
              Olá! 👋 <br />
              Que tal um <strong>orçamento personalizado </strong> para o seu projeto?
            </p>
          </div>
          
          {/* Triângulo do balão */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
        </div>
      )}

      {/* BOTÃO PRINCIPAL */}
      <div className="relative flex items-center justify-center">
        {/* Animação de Pulso */}
        <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-[#25D366] opacity-20"></span>
        
        <a
          href="https://wa.me/5511947927152?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <MessageCircle size={32} strokeWidth={2.5} />
          
          {/* Badge de Notificação */}
          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-bounce rounded-full bg-[#C62828] opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#C62828]"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppFloat;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Link oficial do Google Maps para a JLE Marcenaria
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Phobus+627+Sao+Paulo";

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#121212] overflow-hidden" ref={ref}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-whatsapp {
          animation: pulse-green 2s infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">
        
        {/* BLOCO DE TÍTULO */}
        <div
          className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C62828]"></span>
            <span className="text-[#C62828] font-bold uppercase tracking-[0.5em] text-[10px] lg:text-[11px] font-montserrat">
              Contato
            </span>
            <span className="w-12 h-[1px] bg-[#C62828]"></span>
          </div>

          <h2 className="font-bebas text-5xl md:text-7xl text-[#FFFFFF] leading-[1] mb-8 uppercase tracking-wide">
            Vamos tirar seu projeto <br />
            <span className="text-[#C62828]">do papel?</span>
          </h2>
          
          <p className="text-[#FFFFFF]/80 text-lg md:text-xl font-montserrat font-light leading-relaxed">
            Solicite um orçamento sem compromisso. Nossa equipe está pronta para 
            transformar seu ambiente com a excelência da marcenaria de alto padrão.
          </p>
        </div>

        {/* CARDS DE CONTATO - 2 COLUNAS INTERATIVAS */}
        <div
          className={`grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Card Telefone */}
          <a
            href="tel:+5511947927152"
            className="group flex flex-col items-center gap-6 p-10 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#C62828]/50 transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#C62828]/10 flex items-center justify-center group-hover:bg-[#C62828] transition-all duration-500">
              <Phone size={24} className="text-[#C62828] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-[#FFFFFF] tracking-widest mb-2 uppercase">Telefone</h3>
              <p className="text-[#FFFFFF]/60 font-montserrat text-sm group-hover:text-[#FFFFFF] transition-colors">(11) 947927152</p>
            </div>
          </a>

          {/* Card Localização (Google Maps Link) */}
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-6 p-10 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#C62828]/50 transition-all duration-500 text-center relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-[#C62828]/10 flex items-center justify-center group-hover:bg-[#C62828] transition-all duration-500">
              <MapPin size={24} className="text-[#C62828] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="font-bebas text-2xl text-[#FFFFFF] tracking-widest uppercase">Localização</h3>
                <ExternalLink size={14} className="text-[#C62828] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[#FFFFFF]/60 font-montserrat text-sm group-hover:text-[#FFFFFF] transition-colors">
                Rua Phobus, 627 - São Paulo<br />
                <span className="text-[#C62828] text-[10px] font-bold uppercase tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  Ver no Google Maps
                </span>
              </p>
            </div>
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div
          className={`max-w-md mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-montserrat font-bold uppercase tracking-widest py-8 rounded-2xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all duration-300 border-none animate-whatsapp"
          >
            <a
              href="https://wa.me/5511947927152?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle size={24} className="mr-3 fill-white" />
              Chamar no WhatsApp
            </a>
          </Button>
          
          <p className="text-center text-[#FFFFFF]/30 text-[10px] font-montserrat uppercase tracking-[0.2em] mt-6">
            Resposta imediata • Orçamento gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
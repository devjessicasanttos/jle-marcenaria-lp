import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#121212] overflow-hidden" ref={ref}>
      {/* Importação das Fontes Oficiais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">
        
        {/* BLOCO DE TÍTULO - PADRÃO HERO */}
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

        {/* CARDS DE CONTATO - ARREDONDADOS E REFINADOS */}
        <div
          className={`grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Telefone */}
          <a
            href="tel:+5511000000000"
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

          {/* Endereço */}
          <div className="group flex flex-col items-center gap-6 p-10 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#C62828]/50 transition-all duration-500 text-center">
            <div className="w-16 h-16 rounded-full bg-[#C62828]/10 flex items-center justify-center group-hover:bg-[#C62828] transition-all duration-500">
              <MapPin size={24} className="text-[#C62828] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-[#FFFFFF] tracking-widest mb-2 uppercase">Rua Phobus, 627</h3>
              <p className="text-[#FFFFFF]/60 font-montserrat text-sm">
                São Paulo - SP<br />
                Atendimento em toda capital e região
              </p>
            </div>
          </div>

          {/* E-mail */}
          <a
            href="mailto:contato@jlemarcenaria.com.br"
            className="group flex flex-col items-center gap-6 p-10 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#C62828]/50 transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#C62828]/10 flex items-center justify-center group-hover:bg-[#C62828] transition-all duration-500">
              <Mail size={24} className="text-[#C62828] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-[#FFFFFF] tracking-widest mb-2 uppercase">E-mail</h3>
              <p className="text-[#FFFFFF]/60 font-montserrat text-sm group-hover:text-[#FFFFFF] transition-colors">contato@jlemarcenaria.com.br</p>
            </div>
          </a>
        </div>

        {/* WhatsApp CTA - DESIGN SLIM & BOLD */}
        <div
          className={`max-w-md mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-montserrat font-bold uppercase tracking-widest py-8 rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 border-none"
          >
            <a
              href="https://wa.me/5511947927152?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle size={24} className="mr-3 fill-white" />
              Fale pelo WhatsApp
            </a>
          </Button>
          
          <p className="text-center text-[#FFFFFF]/30 text-[10px] font-montserrat uppercase tracking-[0.2em] mt-6">
            Resposta rápida em horário comercial
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
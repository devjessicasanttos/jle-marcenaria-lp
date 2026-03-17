import React, { useState, useEffect } from "react";
import { Instagram, Facebook } from "lucide-react";

const heroImages = ["/hero4.jpeg", "/hero1.jpeg"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col justify-start pt-32 lg:pt-40 overflow-hidden bg-[#121212] font-montserrat"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
      
      {/* 1. BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={img} alt="Background" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/95 via-[#121212]/70 to-transparent z-10" />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL - ID 'sobre' para o link funcionar */}
      <div id="sobre" className="container mx-auto px-6 relative z-20 lg:pl-20 xl:pl-32">
        <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#C62828]"></span>
            <p className="text-[#C62828] font-bold uppercase tracking-[0.5em] text-[10px] font-montserrat">
              Desde 1980 • Tradição & Excelência
            </p>
          </div>
          
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 uppercase tracking-tight">
            Móveis planejados <br />
            <span className="text-[#C62828]">com excelência</span> <br />
            <span className="text-xl md:text-3xl lg:text-4xl lowercase font-montserrat font-light italic block mt-2">
              e atenção aos detalhes.
            </span>
          </h1>
          
          <p className="text-white/70 text-sm md:text-base mb-12 max-w-xl font-montserrat font-light leading-relaxed border-l border-[#C62828]/50 pl-6">
            A tradição da Marcenaria JLE reside no cuidado artesanal. Somos o braço direito de arquitetos que buscam materializar projetos exclusivos.
          </p>
          
          <div className="flex flex-col gap-10">
            <a href="https://wa.me/5511947927152" className="bg-[#C62828] text-white text-[11px] font-bold uppercase tracking-[0.3em] px-10 py-5 transition-all hover:bg-[#a81f1f] hover:scale-105 active:scale-95 font-montserrat inline-block shadow-lg w-fit">
              Solicitar Orçamento
            </a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-4xl">
              {[
                { title: 'Logística Própria', desc: 'Frota exclusiva para garantir entrega ágil.' },
                { title: 'Pagamento Flexível', desc: 'Condições personalizadas para seu projeto.' },
                { title: 'Precisão Técnica', desc: 'Sincronia total com seu arquiteto.' }
              ].map((diff) => (
                <div key={diff.title} className="space-y-2">
                  <p className="text-[#C62828] font-bold text-[11px] uppercase tracking-[0.25em] font-montserrat">{diff.title}</p>
                  <p className="text-white/50 text-[12px] leading-relaxed font-montserrat font-light">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BARRA DE PROGRESSO */}
      <div className="absolute bottom-10 right-10 z-20 hidden sm:flex items-center gap-6 text-[#8A8A8A] text-[10px] tracking-[0.2em] font-montserrat">
        <span className="text-white/60">0{currentImage + 1}</span>
        <div className="w-20 h-[1px] bg-white/10 relative">
          <div 
            className="absolute inset-0 bg-[#C62828]" 
            key={currentImage}
            style={{ width: '100%', transformOrigin: 'left', animation: 'progress 6s linear' }}
          ></div>
        </div>
        <span className="text-white/20">0{heroImages.length}</span>
      </div>
    </section>
  );
};

export default Hero;
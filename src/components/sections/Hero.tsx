import React, { useState, useEffect } from "react";
import { Instagram, Facebook, Menu, X } from "lucide-react";

const heroImages = [
  "/hero4.jpeg",
  "/hero1.jpeg"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = ['Sobre a JLE', 'Projetos', 'Contato'];

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col justify-start pt-32 lg:pt-40 overflow-hidden bg-[#121212] pb-20 font-montserrat"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
      
      {/* 1. CABEÇALHO */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 lg:px-20 py-8 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          <div className="flex items-center gap-6">
            <div className="relative w-12 h-12 lg:w-24 lg:h-24 overflow-hidden rounded-full border border-white/10 shadow-2xl bg-transparent flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="JLE Logo" 
                className="w-full h-full object-cover scale-[1.40]"
              />
            </div>
            
            <div className="w-[1px] h-6 bg-white/20 hidden sm:block"></div>
            
            <div className="flex items-center gap-4 hidden sm:flex">
              <a href="https://www.instagram.com/marcenaria_j.l.e?igsh=MW04b3Z4cmltbTN6" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#C62828] transition-all"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/share/1AWgHQZRys/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#C62828] transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center text-white absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item, index) => (
              <React.Fragment key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
                  className="text-[10px] font-semibold uppercase tracking-[0.4em] hover:text-[#C62828] transition-all duration-300 relative group px-6 font-montserrat"
                >
                  {item}          
                  <span className="absolute -bottom-2 left-6 right-6 h-[1px] bg-[#C62828] w-0 transition-all group-hover:w-[calc(100%-3rem)]"></span>
                </a>
                {index < menuItems.length - 1 && <span className="text-white/10 font-light text-xs">|</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* BOTÃO MOBILE (HAMBÚRGUER) */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <div className="hidden lg:block">
             <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-montserrat font-light">São Paulo | SP</span>
          </div>
        </div>

        {/* MENU MOBILE EXPANSÍVEL */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#121212]/95 backdrop-blur-lg border-b border-white/10 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300">
            {menuItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xs font-semibold uppercase tracking-[0.3em] hover:text-[#C62828] transition-all"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-6 pt-4 border-t border-white/10">
              <a href="https://instagram.com" className="text-white/40"><Instagram size={20} /></a>
              <a href="https://facebook.com" className="text-white/40"><Facebook size={20} /></a>
            </div>
          </div>
        )}
      </header>

      {/* 2. BACKGROUND SLIDER (MANTIDO) */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={img} alt="Marcenaria JLE Background" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/95 via-[#121212]/70 to-transparent z-10" />
      </div>

      {/* 3. CONTEÚDO PRINCIPAL (MANTIDO COM DIFERENCIAIS) */}
      <div className="container mx-auto px-6 relative z-20 lg:pl-20 xl:pl-32">
        <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#C62828]"></span>
            <p className="text-[#C62828] font-bold uppercase tracking-[0.5em] text-[10px] font-montserrat">
              Desde 1980 • Tradição & Excelência
            </p>
          </div>
          
          <h1 className="font-bebas text-5xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 uppercase tracking-tight">
            Móveis planejados <br />
            <span className="text-[#C62828]">com excelência</span> <br />
            <span className="text-white/90 text-2xl md:text-5xl lg:text-6xl lowercase font-montserrat font-light tracking-tighter italic block mt-2">
              e atenção aos detalhes.
            </span>
          </h1>
          
          <p className="text-white/70 text-sm md:text-base mb-12 max-w-xl font-montserrat font-light leading-relaxed border-l border-[#C62828]/50 pl-6 text-justify">
            A tradição da Marcenaria JLE reside no cuidado artesanal. Somos o braço direito de arquitetos que buscam materializar projetos exclusivos com rigor técnico e acabamento impecável.
          </p>
          
          <div className="flex flex-col gap-16">
            <div>
              <a href="https://wa.me/5511947927152" className="bg-[#C62828] text-white text-[11px] font-bold uppercase tracking-[0.3em] px-10 py-5 transition-all hover:bg-[#a81f1f] hover:scale-105 active:scale-95 font-montserrat inline-block shadow-lg">
                Solicitar Orçamento
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-white/10 max-w-4xl">
              {[
                { title: 'Logística Própria', desc: 'Frota exclusiva para garantir uma entrega ágil e sem avarias.' },
                { title: 'Pagamento Flexível', desc: 'Condições personalizadas para viabilizar seu projeto de alto padrão.' },
                { title: 'Precisão Técnica', desc: 'Sincronia total com o projeto do seu arquiteto, do desenho à montagem.' }
              ].map((diff) => (
                <div key={diff.title} className="space-y-3">
                  <p className="text-[#C62828] font-bold text-[11px] uppercase tracking-[0.25em] font-montserrat">{diff.title}</p>
                  <p className="text-white/50 text-[13px] leading-relaxed font-montserrat font-light">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
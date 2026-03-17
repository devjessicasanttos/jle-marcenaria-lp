import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { 
    title: "Cozinhas", 
    size: "md:col-span-1 md:row-span-2", 
    images: ["/cozinha.jpeg", "/cozinha1.jpeg"], 
  },
  { 
    title: "Quartos", 
    size: "md:col-span-1 md:row-span-3", 
    images: ["/quarto11.jpeg", "/quarto2.jpeg"], 
  },
  { 
    title: "Estruturas metálicas", 
    size: "md:col-span-1 md:row-span-2",
    images: ["/estrutura4.jpeg", "/estrutura2.jpeg"], 
  },
  { 
    title: "Gourmet", 
    size: "md:col-span-1 md:row-span-3", 
    images: ["/gourmet1.jpeg", "/gourmet2.jpeg"], 
  },
  { 
    title: "Salas", 
    size: "md:col-span-1 md:row-span-3", 
    images: ["/sala1.jpeg", "/sala2.jpeg"], 
  },
  { 
    title: "Banheiro", 
    size: "md:col-span-1 md:row-span-2", 
    images: ["/banheiro11.jpeg", "/banheiro.jpeg"], 
  },
];

const ServiceCard = ({ service, isVisible, index, onOpenImage }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (hovered && service.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % service.images.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [hovered, service.images]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setCurrentImg(0); }}
      onClick={() => onOpenImage(service.images[currentImg])}
      className={`group relative overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-700 cursor-zoom-in ${service.size} 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {service.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={service.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 group-hover:scale-105
            ${idx === currentImg ? "opacity-80" : "opacity-0"}`}
        />
      ))}
      
      {/* Overlay de Título no Hover - Combinando com a estética do site */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <p className="text-[#FFFFFF] font-bebas text-xl tracking-widest uppercase">
          {service.title}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="projetos" className="py-24 bg-[#121212]" ref={ref}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">
        
        {/* BLOCO DE TÍTULO - Adaptado ao padrão Hero */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C62828]"></span>
            <span className="text-[#C62828] font-bold uppercase tracking-[0.5em] text-[10px] lg:text-[11px] font-montserrat">
              Portfólio Exclusivo
            </span>
          </div>
          
          <h2 className="font-bebas text-5xl md:text-7xl text-[#FFFFFF] leading-[1] mb-8 uppercase tracking-wide">
            Nossos Projetos <br />
            <span className="text-[#C62828]">sob medida</span>
          </h2>
          
          <p className="text-[#FFFFFF]/80 text-lg md:text-xl max-w-2xl font-montserrat font-light leading-relaxed border-l border-[#C62828]/40 pl-8">
            Inspire-se com ambientes que <span className="text-[#FFFFFF] font-semibold">transformam vidas</span> e traduzem personalidades através da marcenaria de alto padrão.
          </p>
        </div>

        {/* Mosaico de fotos - Estrutura Original */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {services.map((service, i) => (
            <ServiceCard 
              key={i} 
              service={service} 
              isVisible={isVisible} 
              index={i} 
              onOpenImage={setSelectedImg} 
            />
          ))}
        </div>
      </div>

      {/* BLOCO DO MODAL (Lightbox) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-[#FFFFFF]/50 hover:text-[#C62828] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          
          <img 
            src={selectedImg} 
            alt="Projeto Ampliado" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300" 
          />
        </div>
      )}
    </section>
  );
};

export default Services;
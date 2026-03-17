import React, { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { src: "/oficina1.jpeg", caption: "Tecnologia e precisão em nosso maquinário", size: "md:col-span-1" },
  { src: "/oficina2.jpeg", caption: "Montagem detalhada e artesanal", size: "md:col-span-1" },
  { src: "/oficina3.jpeg", caption: "Equipe especializada em acabamentos", size: "md:col-span-1" },
  { src: "/oficina4.jpeg", caption: "Controle de qualidade em cada etapa", size: "md:col-span-2" },
];

const Structure = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="estrutura" className="py-24 bg-[#121212] overflow-hidden" ref={ref}>
      {/* Importação manual das fontes para garantir o funcionamento */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">      
        
        {/* BLOCO DE TÍTULO - PADRÃO DARK LUXURY */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#C62828]"></span>
            <span className="text-[#C62828] font-bold uppercase tracking-[0.4em] text-[10px] font-montserrat">Bastidores</span>
          </div>
          
          <h2 className="font-bebas text-5xl md:text-7xl text-[#FFFFFF] leading-[1] mb-6 uppercase tracking-wide">
            Onde a perfeição <br />
            <span className="text-[#C62828]">ganha forma</span>
          </h2>

          <p className="text-[#FFFFFF]/80 text-lg md:text-xl max-w-xl font-montserrat font-light border-l border-[#C62828]/30 pl-6 leading-relaxed">
            Conheça nossa infraestrutura projetada para garantir a excelência técnica em cada etapa da produção.
          </p>
        </div>

        {/* Mosaico de fotos - COM BORDAS ARREDONDADAS (rounded-2xl) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedImg(item.src)}
              className={`group relative overflow-hidden rounded-2xl bg-[#1a1a1a] cursor-zoom-in ${item.size} 
              transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms]"
              />
              
              {/* Overlay de Legenda - Adaptado ao design */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-[#FFFFFF] text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-montserrat font-bold border-b border-[#C62828] pb-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]/95 backdrop-blur-sm p-4 animate-in fade-in duration-300" 
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-[#FFFFFF]/50 hover:text-[#C62828] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500" 
          />
        </div>
      )}
    </section>
  );
};

export default Structure;
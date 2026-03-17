import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layers, TreeDeciduous, Hammer, Paintbrush, Shield, Wrench, SquareStack } from "lucide-react";

const aboutImages = [
  "/frota.jpeg",
  "/about3.jpeg",
  "/about4.jpeg",
  "/about5.jpeg",
  "/about9.jpeg",
];

const materials = [
  { icon: Layers, label: "MDF" },
  { icon: TreeDeciduous, label: "MADEIRA MACIÇA" },
  { icon: SquareStack, label: "COMPENSADO" },
  { icon: Shield, label: "FÓRMICA" },
  { icon: Paintbrush, label: "FOLHA NATURAL" },
  { icon: Hammer, label: "PINTURA LACCA" },
  { icon: Wrench, label: "ESTRUTURAS METÁLICAS" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === aboutImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    /* AJUSTE AQUI: O id agora é "sobreajle" e adicionamos scroll-mt-32 para o scroll parar no lugar certo */
    <section id="sobreajle" className="py-24 lg:py-32 bg-[#121212] overflow-hidden scroll-mt-32">
      {/* Importação das Fontes Oficiais e utilitários de Scroll */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20" ref={ref}>
        
        {/* BLOCO 1: HISTÓRIA E CARROSSEL */}
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-32">
          
          {/* LADO ESQUERDO: TEXTO COM LEITURA OTIMIZADA */}
          <div className={`flex-[1.2] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-[#C62828] font-bold uppercase tracking-[0.4em] text-xs mb-6 font-montserrat">Sobre nós</p>
            
            <h2 className="font-bebas text-5xl md:text-7xl text-[#FFFFFF] mb-8 leading-[1] uppercase">
              Tradição em madeira, <br />
              <span className="text-[#C62828]">perfeição em cada detalhe.</span>
            </h2>

            <div className="space-y-6 text-[#FFFFFF]/90 text-lg leading-relaxed max-w-2xl border-l border-[#C62828]/30 pl-8 text-justify font-montserrat font-light">
              <p>
                Fundada em 1980, a <b className="text-[#FFFFFF] font-bold">JLE</b> nasceu com o propósito de transformar madeira em projetos únicos, unindo tradição, qualidade e dedicação em cada detalhe. Com mais de 40 anos de experiência no mercado, construímos nossa história baseada na confiança dos clientes.
              </p>

              <p>
                Ao longo dos anos, aperfeiçoamos nossas técnicas e acompanhamos a evolução do setor, sempre mantendo o compromisso com a excelência. Trabalhamos com materiais de ponta e mão de obra especializada para desenvolver móveis sob medida.
              </p>

              <p className="font-medium text-[#FFFFFF] pt-4 text-left italic font-montserrat border-t border-white/10 mt-4">
                "Qualidade, experiência e móveis feitos para impressionar."
              </p>
            </div>
          </div>

          {/* LADO DIREITO: CARROSSEL */}
          <div className={`flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl aspect-square bg-[#1a1a1a]">
              {aboutImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Projeto Marcenaria JLE ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-80" : "opacity-0"
                  }`}
                />
              ))}
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {aboutImages.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 transition-all duration-500 ${
                      index === currentImageIndex ? "w-8 bg-[#C62828]" : "w-2 bg-[#FFFFFF]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-4 lg:-right-8 z-20 bg-[#C62828] p-8 shadow-2xl max-w-[260px]">
              <p className="text-[#FFFFFF] font-bebas text-xl leading-tight tracking-wider uppercase">
                "Tradição e qualidade desde 1980"
              </p>
            </div>
          </div>
        </div>

        {/* BLOCO 2: MATERIAIS EM LINHA ÚNICA */}
        <div className={`mt-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <p className="text-[#C62828] font-bold text-[10px] uppercase tracking-[0.5em] mb-4 font-montserrat">Matéria-Prima</p>
            <h3 className="font-bebas text-4xl md:text-5xl text-[#FFFFFF] uppercase tracking-wide">Qualidade que impressiona</h3>
          </div>

          <div className="flex flex-nowrap lg:justify-center gap-4 lg:gap-6 overflow-x-auto pb-8 scrollbar-hide px-4">
            {materials.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center flex-none w-[140px] lg:w-[160px] h-[160px] lg:h-[190px] bg-[#1a1a1a] border border-[#FFFFFF]/10 hover:border-[#C62828]/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#C62828] translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-5"></div>
                
                <div className="w-12 h-12 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Icon size={28} className="text-[#C62828]" strokeWidth={1.5} />
                </div>
                <span className="text-[9px] lg:text-[10px] font-bold text-center px-2 tracking-[0.2em] text-[#FFFFFF]/80 group-hover:text-[#FFFFFF] uppercase transition-colors font-montserrat">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
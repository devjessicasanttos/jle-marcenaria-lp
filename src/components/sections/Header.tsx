import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", id: "hero" },
    { label: "Sobre Nós", id: "sobreajle" },
    { label: "Projetos", id: "projetos" },
    { label: "Estrutura", id: "estrutura" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#121212]/95 backdrop-blur-md py-4 border-b border-white/5" 
          : "bg-transparent py-6"
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center relative z-[101]">
        {/* LOGO - Ajustado para melhor alinhamento mobile */}
        <a href="#hero" className="flex items-center gap-3 group py-1">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-full border border-white/10 flex items-center justify-center">
             <img 
               src="/logo.png" 
               alt="JLE Logo" 
               className="w-full h-full object-cover scale-[1.20]"
             />
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-2xl md:text-4xl text-white leading-none tracking-tighter transition-colors group-hover:text-[#C62828]">
              JLE
            </span>
            <span className="font-montserrat text-[7px] md:text-[10px] uppercase tracking-[0.3em] text-[#C62828] font-bold leading-none mt-1">
              Marcenaria
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              className="font-montserrat text-[#FFFFFF]/70 hover:text-[#C62828] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C62828] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="#contato" 
            className="font-montserrat text-[10px] uppercase tracking-widest font-bold bg-[#C62828] text-white px-6 py-3 rounded-none hover:bg-[#a32121] transition-all duration-300"
          >
            Orçamento
          </a>
        </nav>

        {/* MOBILE MENU BUTTON - Corrigido para visibilidade total */}
        <button
          className="lg:hidden flex items-center justify-center p-2 text-white hover:text-[#C62828] transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? (
            <X size={32} strokeWidth={2.5} className="text-white" />
          ) : (
            <Menu size={32} strokeWidth={2.5} className="text-white" />
          )}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#121212] z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className="font-bebas text-5xl text-[#FFFFFF] hover:text-[#C62828] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contato"
          onClick={() => setIsOpen(false)}
          className="mt-4 font-montserrat text-[12px] uppercase tracking-widest font-bold border border-[#C62828] text-[#C62828] px-10 py-5 hover:bg-[#C62828] hover:text-white transition-all"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
};

export default Header;
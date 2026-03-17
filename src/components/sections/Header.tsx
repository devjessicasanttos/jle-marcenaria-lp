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
    { label: "Início", id: "inicio" },
    { label: "Sobre Nós", id: "sobre" }, 
    { label: "Projetos", id: "projetos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#121212]/98 backdrop-blur-md py-4 border-b border-white/10" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center relative">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-baseline gap-2 z-[1000]">
          <span className="font-bebas text-3xl text-white tracking-tighter">JLE</span>
          <span className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-[#C62828] font-bold">Marcenaria</span>
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              className="font-montserrat text-white/80 hover:text-[#C62828] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO DO MENU MOBILE - FORÇADO COM FUNDO VERMELHO */}
        <button
          className="lg:hidden z-[1000] bg-[#C62828] p-3 rounded-full shadow-xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </div>

      {/* MENU MOBILE (OVERLAY) */}
      <div
        className={`fixed inset-0 bg-[#121212] flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          isOpen 
            ? "translate-x-0 opacity-100 z-[900]" 
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className="font-bebas text-5xl text-white hover:text-[#C62828]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
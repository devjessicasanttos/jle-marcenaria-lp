const Footer = () => {
  return (
    <footer className="bg-[#121212] py-16 border-t border-white/5">
      {/* Importação das Fontes Oficiais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* COLUNA 1: LOGO E DESCRIÇÃO */}
          <div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-bebas text-4xl text-[#FFFFFF] tracking-tighter">
                JLE
              </span>
              <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-[#C62828] font-bold">
                Marcenaria
              </span>
            </div>
            <p className="font-montserrat text-[#FFFFFF]/50 text-sm leading-relaxed max-w-xs font-light">
              Transformando ambientes com qualidade, precisão e paixão pela
              marcenaria de alto padrão desde 1980.
            </p>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="font-bebas text-xl text-[#FFFFFF] tracking-widest mb-6 uppercase">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre Nós", id: "sobreajle" },
                { label: "Projetos", id: "projetos" },
                { label: "Estrutura", id: "estrutura" },
                { label: "Contato", id: "contato" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    className="font-montserrat text-[#FFFFFF]/50 hover:text-[#C62828] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#C62828] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: FUNCIONAMENTO */}
          <div>
            <h4 className="font-bebas text-xl text-[#FFFFFF] tracking-widest mb-6 uppercase">
              Atendimento
            </h4>
            <div className="space-y-4 font-montserrat text-sm text-[#FFFFFF]/50 font-light">
              <p className="flex justify-between border-b border-white/5 pb-2">
                <span>Segunda a Sexta</span>
                <span className="text-[#FFFFFF]/80">08h - 18h</span>
              </p>
              <p className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado</span>
                <span className="text-[#FFFFFF]/80">08h - 12h</span>
              </p>
              <p className="text-[#C62828] font-bold text-[10px] uppercase tracking-widest pt-2">
                São Paulo e Região
              </p>
            </div>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat text-[#FFFFFF]/30 text-[10px] uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} JLE Marcenaria. Todos os direitos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
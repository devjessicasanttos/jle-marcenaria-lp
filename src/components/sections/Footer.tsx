import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] py-16 border-t border-white/5 font-montserrat">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* COLUNA 1: LOGO E DESCRIÇÃO */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border border-white/10 shadow-2xl bg-transparent flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="JLE Logo" 
                  className="w-full h-full object-cover scale-[1.40]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bebas text-2xl text-white tracking-tighter leading-none">JLE</span>
                <span className="font-montserrat text-[8px] uppercase tracking-[0.4em] text-[#C62828] font-bold">Marcenaria</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light text-justify">
              Transformando ambientes com qualidade, precisão e a tradição da marcenaria de alto padrão desde 1980.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div>
            <h4 className="font-bebas text-xl text-white tracking-widest mb-6 uppercase">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre a JLE", id: "sobreajle" },
                { label: "Projetos", id: "projetos" },
                { label: "Estrutura", id: "estrutura" },
                { label: "Contato", id: "contato" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    className="text-white/50 hover:text-[#C62828] transition-colors text-[11px] uppercase tracking-widest flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#C62828] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: CONTATO INTEGRADO (ANTIGO ATENDIMENTO) */}
          <div className="flex flex-col">
            <h4 className="font-bebas text-xl text-white tracking-widest mb-6 uppercase">Contato</h4>
            
            <div className="space-y-6 text-xs tracking-wide">
              {/* Horário e Localização agrupados por bordas sutis */}
              <div className="space-y-4 border-l border-[#C62828]/30 pl-4">
                <div className="space-y-1">
                  <p className="text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">Atendimento</p>
                  <p className="text-white/70">Segunda a Sexta — 07h30 às 17h30</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-white/30 uppercase text-[9px] font-bold tracking-[0.2em]">Região</p>
                  <p className="text-[#C62828] font-bold uppercase tracking-widest">São Paulo e Região</p>
                </div>
              </div>

              {/* Redes Sociais Integradas na Coluna */}
              <div className="pt-2 flex items-center gap-5">
                <a href="https://wa.me/5511947927152" className="text-white/40 hover:text-[#C62828] transition-all flex items-center gap-2 group">
                  <MessageCircle size={18} />
                  <span className="hidden group-hover:block text-[9px] uppercase tracking-widest">WhatsApp</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#C62828] transition-all"><Instagram size={18} /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#C62828] transition-all"><Facebook size={18} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] text-center md:text-left">
            © {new Date().getFullYear()} JLE Marcenaria. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <span className="text-[9px] uppercase tracking-widest text-white">Desenvolvido por</span>
            <span className="font-bebas text-lg text-[#C62828] tracking-widest">Jéssica Santos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
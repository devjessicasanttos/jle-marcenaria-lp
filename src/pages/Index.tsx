import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Structure from "@/components/sections/Structure";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Removido o Header daqui porque ele já está dentro do Hero agora */}
      {/* <Header /> */} 
      <Hero />
      <About />
      <Services />
      <Structure />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

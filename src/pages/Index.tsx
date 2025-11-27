import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Collections from "@/components/Collections";
import EnergyProcess from "@/components/EnergyProcess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background crystal-bg">
      <Header />
      <Hero />
      <Philosophy />
      <Collections />
      <EnergyProcess />
      <Footer />
    </main>
  );
};

export default Index;

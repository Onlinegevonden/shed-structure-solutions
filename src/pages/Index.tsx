import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductCard";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductSection />
        <HowItWorks />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

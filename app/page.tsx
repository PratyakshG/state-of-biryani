import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import RoyalAssurance from "@/components/RoyalAssurance";
import RoyalEthos from "@/components/RoyalEthos";
import Cities from "@/components/Cities";
import Celebrations from "@/components/Celebrations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-royal-black">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <RoyalAssurance />
      <RoyalEthos />
      <Cities />
      <Celebrations />
      <Footer />
    </main>
  );
}

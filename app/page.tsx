import { HeaderSection } from "./components/HeaderSection";
import { HelloSection } from "./components/HelloSection";
import { HeroSection } from "./components/HeroSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <HeaderSection />
      <div className="container mx-auto px-12 ">
        <HelloSection />
      </div>
      <div>
        <HeroSection />
      </div>
      <Footer />
    </main>
  );
}

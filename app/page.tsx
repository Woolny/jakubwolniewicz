import HeadeSection from "./components/HeaderSection";
import HelloSection from "./components/HelloSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeadeSection />
      <div className="container mx-auto px-12 ">
        <HelloSection />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}

import { useEffect } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Certificates } from "./components/sections/Certificates";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  useEffect(() => {
    // Add dark class to html to ensure dark mode variable usage
    document.documentElement.classList.add("dark");
    // Lock scroll during loading
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="bg-[#050510] text-[#E8E8FF] min-h-screen selection:bg-[#00BFFF] selection:text-[#050510]">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

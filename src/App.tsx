import { Navbar } from "@/components/ui/navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
export default function App() {
  return (
    <main className="w-full h-auto poppins-regular">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <div className="flex flex-col md:flex-row">
        <Experience />
        <Education />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

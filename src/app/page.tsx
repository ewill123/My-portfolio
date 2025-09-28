// src/app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero / Landing */}
      <section
        id="hero"
        aria-label="Hero"
        className="w-full max-w-full overflow-hidden"
      >
        <Hero />
      </section>

      {/* About */}
      <section
        id="about"
        aria-label="About"
        className="w-full max-w-full overflow-hidden"
      >
        <About />
      </section>

      {/* Projects */}
      <section
        id="projects"
        aria-label="Projects"
        className="w-full max-w-full overflow-hidden"
      >
        <Projects />
      </section>

      {/* Contact */}
      <section
        id="contact"
        aria-label="Contact"
        className="w-full max-w-full overflow-hidden"
      >
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full max-w-full overflow-hidden">
        <Footer />
      </footer>
    </>
  );
}

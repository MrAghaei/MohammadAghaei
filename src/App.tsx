import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Experiences from "./components/Experiences.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import ContactMe from "./components/ContactMe.tsx";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
    </>
  );
}

export default App;

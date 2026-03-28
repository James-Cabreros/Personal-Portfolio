import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Trainings from "./components/Trainings";
import AdditionalSkills from "./components/AdditionalSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} toggleDark={() => setDark(d => !d)} />
       <Hero />
      <div className="main-card-wrapper">
       
        <About />
        <TechStack />
        <Projects />
        <Trainings />
        <AdditionalSkills />
        
      </div>
      <Contact />
      <Footer />
     
    </>
  );
}

export default App;
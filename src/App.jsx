import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import GetInTouch from "./Components/GetInTouch";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;

import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Certifications from "./components/Certifications";
export default function App(){
  return(
    <>
    <Header />
    <Home />
    <Projects />
    <Skills />
    <Contact />
    <About />
    <Certifications />
    <h1>My Portfolio</h1>
    </>
  );
}
const header = document.querySelector(".main-header") as HTMLElement;
const footer = document.querySelector("#main-footer") as HTMLElement;
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { createPortal } from "react-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Particle from "./components/Particle/Particle";
const App = () => {
  return (
    <>
      {createPortal(<Navigation></Navigation>, header)}
      <Particle></Particle>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      {createPortal(<Footer />, footer)}
    </>
  );
};

export default App;

const header = document.querySelector(".main-header") as HTMLElement;
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { createPortal } from "react-dom";
const App = () => {
  return (
    <>
      {createPortal(<Navigation></Navigation>, header)}
      <About></About>
      <Projects></Projects>
    </>
  );
};

export default App;

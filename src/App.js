import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components:
import About from "../src/components/About/About";
import Footer from "../src/components/Footer/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsAccordion from "../src/components/accordion/ProjectsAccordion";
import NewSkills from "./components/NewSkills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Hero />
            <ProjectsAccordion />
            <NewSkills />
            <About />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

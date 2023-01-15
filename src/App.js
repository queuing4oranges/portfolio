import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
// import Skills from './components/Skills';
import OneProject from './components/OneProject';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectsAccordion from "../src/components/accordion/ProjectsAccordion";
import NewSkills from './components/NewSkills';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Hero />
          <ProjectsAccordion />
          {/* <Skills /> */}
          <NewSkills />
          <About />
          <Footer />
        </Route>

        <Route exact path="/projects/:id">
          <OneProject />
        </Route>


      </Switch>
    </BrowserRouter>
    </div>

  );
}

export default App;


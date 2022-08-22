import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import OneProject from './components/OneProject';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Footer />
        </Route>

        {/* <Route path="/projects/:id">
          <OneProject />
        </Route> */}


      </Switch>
    </BrowserRouter>
    </div>

  );
}

export default App;


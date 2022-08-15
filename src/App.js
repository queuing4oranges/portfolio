import './App.scss';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {

  return (
    <div className="App">

      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
     
      </div>

  );
}

export default App;


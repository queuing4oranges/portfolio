import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Modal from './components/Modal';
import { useState } from 'react';

function App({ hideModal }) {
  const [showModal, setShowModal] = useState(false)


  return (
    <div className="App">

      <Header />
      <Hero />
      <br />
      <br />
      <button 
      className='openModalBtn' 
      onClick={() => {
        setShowModal(true)}}
      >Show
      </button>
      {showModal && <Modal hideModal={setShowModal} />}

      
      
      </div>

  );
}

export default App;

//hideModal - we're passing this on the function we already have (that's why it's setShowModal and not for example a new fct "setCloseModal" - after all it's just toggling true or false)
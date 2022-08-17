import Modal from "./Modal";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
    const [openModal, setOpenModal] = useState(false);

    const showModal = () => {
        setOpenModal(true)
    }

    const hideModal = () => {
        setOpenModal(false)

    }

    return ( 

    <div 
    className="hero__image" id="home">            

    {openModal &&
        <Modal 
        hideModal={hideModal}/>}

        <div className="hero__text">
            <h1 className="hero__title">Hi, I am <br/>Katja Zenker</h1>
            <p className="hero__par">And I'm a Web Developer</p>
                    <button 
                        type="button"
                        className="button bouncy"
                        onClick={() =>showModal()}
                        >Get in touch</button>



            
  </div>

  <form action="post">

  </form>
</div>


     );
}
 
export default Hero;

//hideModal - we're passing this on the function we already have (that's why it's setopenModal and not for example a new fct "setCloseModal" - after all it's just toggling true or false)
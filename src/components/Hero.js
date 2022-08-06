import Modal from "./Modal";
import { useState } from "react";

const Hero = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () =>{
        setOpenModal(true)
    }


    return ( 

    <div className="hero__image">            {openModal &&
             <Modal hideModal={setOpenModal}/>}
        <div className="hero__text">
            <h1 className="hero__title">I am <br/>Katja Zenker</h1>
            <p className="hero__par">And I'm a Web Developer</p>
                    <button 
                        type="button"
                        className="button bouncy"
                        onClick={() =>handleClick()}
                        >Get in touch</button>



            
  </div>

  <form action="post">

  </form>
</div>


     );
}
 
export default Hero;

//hideModal - we're passing this on the function we already have (that's why it's setopenModal and not for example a new fct "setCloseModal" - after all it's just toggling true or false)
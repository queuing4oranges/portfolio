import BouncyButton from "../BouncyButton";
import { useState } from "react";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true)
        if (showModal === true){
            console.log("hello") //if i click this button, i want to show the modal
        }
    }


    return ( 

    <div className="hero__image">
        <div className="hero__text">
            <h1 className="hero__title">I am <br/>Katja Zenker</h1>
            <p className="hero__par">And I'm a Web Developer</p>
            <BouncyButton handleClick={handleClick} />
            
  </div>

  <form action="post">

  </form>
</div>


     );
}
 
export default Hero;
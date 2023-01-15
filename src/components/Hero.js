import Modal from "./Modal";
import { useState } from "react";

const Hero = () => {
    const [openModal, setOpenModal] = useState(false);

    const showModal = () => {
        setOpenModal(true)
    }

    const hideModal = () => {
        setOpenModal(false)

    }

    return ( 
    <>{openModal &&
        <Modal 
        hideModal={hideModal}/>}
    <div 
    className={openModal ? "blurry" : "hero__image"} 
    id="home">            
        <div className="hero__text">
            <h1 className="hero__title">Hi, I'm Katja</h1>
            <p className="hero__par">a Prague based Junior Web Developer</p>
                    <button 
                        type="button"
                        className="button bouncy"
                        onClick={() =>showModal()}
                        >Get in touch
                    </button>       
        </div>

        <form action="post"></form>
    </div>

    </>
    );
}
 
export default Hero;

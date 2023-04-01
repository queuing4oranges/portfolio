import Modal from "./Modal";
import { useState } from "react";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && <Modal hideModal={hideModal} />}
      <div className={openModal ? "blurry" : "hero__image"} id="home">
        <div className="hero__text">
          <div className="hero__title">
            <h1>Hi, I'm Katja</h1>
          </div>

          <div className="hero__par">
            <p>a Prague based Web Developer</p>
          </div>

          <button
            type="button"
            className="button bouncy"
            onClick={() => showModal()}
          >
            Get in touch
          </button>
        </div>

        <form action="post"></form>
      </div>
    </>
  );
};

export default Hero;

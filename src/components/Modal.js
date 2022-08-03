import React from 'react'
import ContactForm from './ContactForm'

function Modal({ setShowModal }) {
  return (
    <div className="modalBackground">       
        <div className="modalContainer">
            <ContactForm setShowModal={setShowModal} />
        </div>
    </div>
  )
}

export default Modal

//modalBackground will be the blurry backdrop
//modalContainer should contain everything concerning the modal
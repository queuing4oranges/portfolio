import React from 'react'


function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">       
        <div className="modalContainer">
                <form className="contact__form">
                <h2 className="form__title">Hello, there!</h2>
                <label>
                    <span>I'm contacting you because</span>
                    <input type="text" />
                </label>

                <label>
                    <span>You can reply to me at</span>
                    <input placeholder="your email" type="text" />
                </label>

                <label>
                    <span>My message to you</span>
                    <textarea className="textarea" id="" cols="30" rows="10"></textarea>
                </label>
                <div className="btn__cont">
                    <button 
                    onClick={() => setOpenModal(false)} 
                    className="contact__button">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Modal

//modalBackground will be the blurry backdrop
//modalContainer should contain everything concerning the modal
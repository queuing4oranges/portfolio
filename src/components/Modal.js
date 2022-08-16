

import React, { useState } from 'react';
import { send } from 'emailjs-com';


function Modal() {
    const [openModal, setOpenModal] = useState(true);
    const [toSend, setToSend] = useState({
        namefrom: '',
        topic: '',
        replyto: '',
        message: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_hzahxgj', 
            'template_ekj5muj', 
            toSend, 
            'hGPQvp50oflM09nyO'
        )
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }


  return (
    // <div className="modalBackground">       
        <div className="modalContainer">

                <form onSubmit={onSubmit} className="contact__form">

                <h2 className="form__title">Hello, there!</h2>
                <label>
                    <span>My name is</span>
                    <input 
                    type="text"
                    name="namefrom"
                    value={toSend.namefrom}
                    onChange={handleChange} />
                </label>
                <label>
                    <span>I'm contacting you because</span>
                    <input 
                    type="text"
                    name="topic"
                    value={toSend.topic}
                    onChange={handleChange} />
                </label>

                <label>
                    <span>You can reply to me at</span>
                    <input 
                    placeholder="your email" 
                    type="text"
                    name="replyto"
                    value={toSend.replyto}
                    onChange={handleChange} />
                </label>

                <label>
                    <span>My message to you</span>
                    <textarea 
                    className="textarea" 
                    id="" 
                    cols="30" 
                    rows="10"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}></textarea>
                </label>
                <div className="btn__cont">
                    <button 
                    type='submit'
                    onClick={() => setOpenModal(false)} 
                    className="contact__button">Submit</button>
                </div>
            </form>
        </div>
    // </div>
  )
}

export default Modal

//modalBackground will be the blurry backdrop
//modalContainer should contain everything concerning the modal
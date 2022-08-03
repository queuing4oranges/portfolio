

const ContactForm = ({ setShowModal }) => {
    return ( 

        <div>
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
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>
                <div className="btn__cont">
                    <button 
                    onClick={() => setShowModal(false)} 
                    className="contact__button">Submit</button>
                </div>
            </form>

            <br />
            <br />

        </div>

     );
}
 
export default ContactForm;
import React, { useState } from "react";
import { send } from "emailjs-com";
import { toast } from "react-toastify";


function ContactModal({ setOpenModal }) {
	const serviceID = process.env.REACT_APP_SERVICE_ID;
	const templateID = process.env.REACT_APP_TEMPLATE_ID;
	const publicKey = process.env.REACT_APP_PUBLIC_KEY;
	
	const [toSend, setToSend] = useState({
	namefrom: "",
	topic: "",
	replyto: "",
	message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			send(serviceID, templateID, toSend, publicKey);
			setOpenModal(false);
			toast.success("Thank you for your message.", {
				autoClose: 1500,
				pauseOnHover: true,
			})
		} catch(e) {
			console.error(e, "Message has not been sent")
		}
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-8 shadow-xl w-full max-w-mod md:w-auto md:max-w-md">
				<h2 className="text-2xl mb-4">Hello, there!</h2>

				<form onSubmit={handleSubmit}>
					<div className="text-gray-700 mb-4">
						<label className="flex flex-col mb-4">
							<span className="mb-1">My name is *</span>
							<input
								className="modal__input border border-accent focus:border-transparent px-2 py-2"
								type="text"
								name="namefrom"
								value={toSend.namefrom}
								onChange={handleChange}
								autoComplete="on"
								required
							/>
						</label>
						
						<label className="flex flex-col mb-4">
							<span>You can reply to me at *</span>
							<input
								className="modal__input border border-accent focus:border-transparent px-2 py-2"
								placeholder="your@email.cz"
								type="email"
								name="replyto"
								value={toSend.replyto}
								onChange={handleChange}
								autoComplete="on"
								required
							/>
						</label>
						
						<label className="flex flex-col mb-4">
							<span>My message to you *</span>
							<textarea
								className="modal__input border border-accent resize-none focus:border-transparent px-2 py-2"
								type="text"
								cols="30"
								rows="10"
								name="message"
								value={toSend.message}
								onChange={handleChange}
								autoComplete="on"
								required
							></textarea>
						</label>

					</div>
						
					<div className="flex justify-between">
						<button
							onClick={() => setOpenModal(false)}
							className="bg-gray-200 text-dark px-4 py-2 rounded-md hover:bg-hover hover:text-accent"
						>
							Close
						</button>
						<button
							type="submit"
							className="bg-accent text-dark px-4 py-2 rounded-md hover:bg-hover hover:text-accent"
						>
							Send
						</button>
					</div>
				</form>

			</div>
		</div>
	);
}

export default ContactModal;

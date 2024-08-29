import React, { useState } from "react";
import "./ContactModal.css";

const ContactModal = ({ closeModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you could add your form submission logic here)
    setFormSubmitted(true);
  };

  return (
    <div className="Modal-Wrapper">
      <div className="modal-Container">
        <button className="BtnClose" onClick={() => closeModal(false)}>
          X
        </button>
        {!formSubmitted ? (
          <form action="" className="FormStyle" onSubmit={handleSubmit}>
            <div className="ContactDiv">
              <label htmlFor="Name" className="LableStyle">
                Name
              </label>
              <input type="text" className="InputBox" id="Name" required />
            </div>
            <div className="ContactDiv">
              <label htmlFor="Phone" className="LableStyle">
                Phone No
              </label>
              <input type="text" className="InputBox" id="Phone" required />
            </div>
            <div className="ContactDiv">
              <label htmlFor="Message" className="LableStyle">
                Message
              </label>
              <textarea
                name="Message"
                id="Message"
                className="InputMessageBox"
                required
              ></textarea>
            </div>
            <div className="ActionBox">
              <button className="submit-btn" type="submit">
                Submit
              </button>
              <button
                className="cancel-btn"
                type="button"
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="SuccessMessage">
            Message sent! We will contact you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

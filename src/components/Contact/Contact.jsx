import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../context";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7irn7bi",
        "template_6un8yaa",
        formRef.current,
        "tCVaxdiI_wrdXl4QS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="bg-strip"></div>
          <div className="c-left">
            <h1 className="c-title">Let's Discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +91 9370130840
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                sanketk1845@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                A/P - Malage BK, Tal - Kagal, Dist - Kolhapur.
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b> Get in touch. Always ready to interact
              with peoples.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Messege"
                name="messege"
              />
              <button>Submit</button>
              {done && "Thank You..!"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import emailjs from "emailjs-com";

// SCSS
import "../../style.scss";

import { ReactComponent as AboutSVG } from "../../svgs/AboutSVG.svg";
import { ReactComponent as ContactSVG } from "../../svgs/ContactSVG.svg";
import { ReactComponent as WriteSVG } from "../../svgs/WriteSVG.svg";

const ContactForms = () => {
  const [name, setName] = useState("");
  const [saveName, setSaveName] = useState("");
  const [mail, setMail] = useState("");
  const [saveMail, setSaveMail] = useState("");
  const [message, setMessage] = useState("");

  const [gate, setGate] = useState(0);
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleFormChange = (e) => {
    if (gate === 0) {
      setName(e.target.value);
      console.log(name);
    } else if (gate === 1) {
      setMail(e.target.value);
      console.log(mail);
    } else {
      setMessage(e.target.value);
      console.log(message);
    }
  };
  const SubmitForm = () => {
    document.getElementById("previous").style.display = "none";
    document.getElementById("submit-form").style.display = "none";
    document.getElementById("message-sent").style.visibility = "visible";
    let templateParams = {
      name: name,
      mail: mail,
      message: message,
    };
    emailjs
      .send(
        "service_4tepqdh",
        "template_g5sxj6u",
        templateParams,
        "user_9bW3VqSzF0BsJNAr0HFjK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    templateParams = {
      name: "",
      mail: "",
      message: "",
    };
  };

  return (
    <>
      <div id="contact-form">
        <div className="sender-info-div">
          {saveName !== "" ? (
            <div className="sender-info">
              <AboutSVG className="sender-info-SVG" />
              {saveName}
            </div>
          ) : null}
          {saveMail !== "" ? (
            <div className="sender-info">
              <ContactSVG className="sender-info-SVG-1" />
              {saveMail}
            </div>
          ) : null}
        </div>

        {gate === 0 ? (
          <div className="div-form">
            <AboutSVG className="contact-section-SVG-1" />
            <input
              type="text"
              onChange={handleFormChange}
              value={name}
              className="form"
              placeholder="Input your name"
            />
          </div>
        ) : gate === 1 ? (
          <div className="div-form">
            <ContactSVG className="contact-section-SVG-1" />
            <input
              type="text"
              onChange={handleFormChange}
              value={mail}
              className="form"
              placeholder="Input your mail"
            />
          </div>
        ) : (
          <div className="div-form">
            <WriteSVG className="contact-section-SVG" />
            <TextareaAutosize
              value={message}
              onChange={handleFormChange}
              placeholder="Input your message"
              maxRows={12}
              className="form-big"
            />
          </div>
        )}
        <div className="phone-buttons">
          <div
            id="previous"
            className={gate === 0 ? "btn-inactive" : "btn"}
            onClick={
              gate > 0
                ? () => {
                    setGate(gate - 1);
                    if (validateEmail(mail) === true) {
                      setSaveMail(mail);
                    }
                  }
                : null
            }
          >
            Previous
          </div>
          {gate === 0 ? (
            <div
              className={name === "" ? "btn-inactive" : "btn"}
              onClick={
                name !== ""
                  ? () => {
                      setGate(gate + 1);
                      setSaveName(name);
                    }
                  : null
              }
            >
              Next
            </div>
          ) : gate === 1 ? (
            <div
              className={validateEmail(mail) === false ? "btn-inactive" : "btn"}
              onClick={
                validateEmail(mail) === false
                  ? null
                  : () => {
                      setGate(gate + 1);
                      setSaveMail(mail);
                    }
              }
            >
              Next
            </div>
          ) : (
            <div
              id="submit-form"
              className={message.length < 10 ? "btn-inactive" : "btn"}
              onClick={SubmitForm}
            >
              Submit your message
            </div>
          )}
          <div className="message-sent" id="message-sent">
            Message Sent
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForms;

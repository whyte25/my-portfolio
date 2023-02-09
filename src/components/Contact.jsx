import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";

import ContactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";

export default function Contact() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_875nnac",
        "template_xy49yao",
        form.current,
        "cJih3fhhIVWOLGmJo",
        setButtonText("Sending")
      )

      .then(
        () => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setStatus({ success: true, Message: "Message Sent Successfully" });
          setButtonText("Send");
        },
        (error) => {
          setStatus({ success: false, Message: "Something Went Wrong" });
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center form-col">
          <Col md={6}>
            <img src={ContactImg} alt="" />
          </Col>
          <Col md={6}>
            <h2 data-aos="slide-up">Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1" data-aos="slide-up">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1" data-aos="slide-up">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1" data-aos="slide-up">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1" data-aos="slide-up">
                  <input
                    required
                    type="tel"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1" data-aos="slide-up">
                  <textarea
                    required
                    name="message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit" data-aos="slide-up">
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={status.success == false ? "danger" : "success"}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

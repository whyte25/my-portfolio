import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer", "Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="banner">
      <Container className="banner-col">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              <span className="wrap-1">{`HI I'm Ifeoluwa`} </span>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Hello, my name is Fasogba Ifeoluwa. I am a self-taught front-end
              developer. I primarily focus on writing clean elegant, and
              efficient code. I am proficient in HTML, CSS, Javascript, Tailwind
              CSS and React.
            </p>
            <a
              href="https://bit.ly/3fMzaMz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => console.log("")}
            >
              Let's Connect <ArrowRightCircle />
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="header img" />
          </Col>
        </Row>
      </Container>
      ;
    </section>
  );
}

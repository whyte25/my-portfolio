import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { client, urlFor } from "../../client";

export default function Banner() {
  const [header, setHeader] = useState([]);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer", "Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  console.log(toRotate);

  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then((response) => setHeader(response));
  }, []);

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
        {header.map((item) => (
          <Row key={item._id}>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">{item.subName}</span>
              <h1>
                <span className="wrap-1">{item.name} </span>
                <span className="wrap">{text}</span>
              </h1>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Let's Connect <ArrowRightCircle />
              </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={urlFor(item.imageurl.asset)} alt="header img" />
            </Col>
          </Row>
        ))}
      </Container>
      ;
    </section>
  );
}

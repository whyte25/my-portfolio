import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/quant-island.jfif";
import projImg2 from "../assets/img/goriite-portfolio.jfif";
import projImg3 from "../assets/img/opay-clone.jfif";
import projImg4 from "../assets/img/google-clone.jfif";
import projImg5 from "../assets/img/easybank.jfif";
import projImg6 from "../assets/img/lyriks.jfif";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Quants Island",
      description: "Development",
      imgUrl: projImg1,
      url: "quantisland.com",
    },
    {
      title: "Fehintola First",
      description: "Development",
      imgUrl: projImg2,
      url: "fehintolafirst.netlify.app",
    },
    {
      title: "Opay clone Site",
      description: "Development",
      imgUrl: projImg3,
      url: "opay-clone-site.netlify.app",
    },
    {
      title: "Google Search Clone",
      description: "Development",
      imgUrl: projImg4,
      url: "google-search-clone-2-0.netlify.app",
    },
    {
      title: "EasyBank Landing Page",
      description: "Development",
      imgUrl: projImg5,
      url: "easybank-ifeoluwa.netlify.app",
    },
    {
      title: "Lyriks Music Website",
      description: "Development",
      imgUrl: projImg6,
      url: "lyriks-mp3.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 data-aos="slide-up" data-aos-duration="1000">
              projects
            </h2>
            <p data-aos="slide-up" data-aos-duration="1000">
              These are the projects done by me, With the use of programming
              languages and frameworks have learnt so far.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                data-aos="slide-up"
                data-aos-duration="1000"
                variant="pills"
                className="nav-pills mb-5 justify-content-center alight-item-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

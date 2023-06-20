import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Mailchimp from "../components/Mailchimp";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Mailchimp />
          <Col sm={6} className="footer-logo-col">
            <img src={logo} alt="" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/fas-ifeoluwa-22065a20b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/whyte.25/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
              <a
                href="https://twitter.com/cz_binance_88Y_l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="twitter" style={{ color: "white" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

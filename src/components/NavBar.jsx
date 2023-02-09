import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Resume from "../components/my resume.pdf";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
              className={`${
                activeLink ? "active navbar-link" : "navbar-link"
              } `}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => onUpdateActiveLink("skills")}
              className={`${
                activeLink ? "active navbar-link" : "navbar-link"
              } `}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => onUpdateActiveLink("projects")}
              className={`${
                activeLink ? "active navbar-link" : "navbar-link"
              } `}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => onUpdateActiveLink("contact")}
              className={`${
                activeLink ? "active navbar-link" : "navbar-link"
              } `}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/fas-ifeoluwa-22065a20b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://twitter.com/cz_binance_88Y_l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="twitter" style={{ color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/whyte.25/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <a
              href={Resume}
              download="Fasogba Ifeoluwa - Resume"
              className="resume"
            >
              <span>My CV</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

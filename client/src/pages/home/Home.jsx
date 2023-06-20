import React from "react";

import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import { Contact } from "../../components/Contact";
import Projects from "../projects/Projects";
import AboutMe from "../../components/AboutMe";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="wrapper-container">
        <AboutMe />
        {/* <Projects /> */}
      </div>
      <Contact />
    </>
  );
};

export default Home;

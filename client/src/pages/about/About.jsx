import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../../client";
import Stack from "../../components/Stack";
import AboutMe from "../../components/AboutMe";

const About = () => {
  return (
    <div className="pt-20 pb-32 about">
      <AboutMe />
    </div>
  );
};

export default About;

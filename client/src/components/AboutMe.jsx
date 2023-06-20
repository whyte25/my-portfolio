import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import Stack from "../components/Stack";
import Experience from "./Experience";
import ProjectsComponent from "./ProjectsComponent";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((response) => setAbout(response));
  }, []);

  return (
    <div id="about" className="w-5/6 sm:w-[90%] mx-auto pt-16 ">
      <div className="flex items-center gap-3">
        <div className="flex flex-col   gap-1">
          <div className="w-8 bg-white ml-2 h-[2px]" />
          <div className="w-8 bg-white h-[2px]" />
        </div>
        <h3 className="text-2xl sm:text-base">About Me</h3>
        <div className="flex items-center">
          <div className="w-80 md:w-40 sm:w-32 bg-white ml-2 h-[2px]" />
          <div className="w-3 rounded-full border-2 border-bg-white  h-3" />
        </div>
      </div>
      {about &&
        about.map((item) => (
          <div key={item._id} className="my-8">
            <div className="flex md:flex-col-reverse md:space-x-0 md:gap-10 items-center space-x-8">
              <p className="text-[18px] md:text-base leading-7 md:leading-normal w-5/6 md:w-full">
                {item.description}
              </p>
              <img
                src={urlFor(item.imageurl)}
                alt=""
                className="w-80 h-72 object-cover border-2 border-bg-white rounded-md"
              />
            </div>
          </div>
        ))}
      <Stack />
      <Experience />
      {location.pathname === "/" && (
        <>
          <ProjectsComponent />
        </>
      )}
    </div>
  );
};

export default About;

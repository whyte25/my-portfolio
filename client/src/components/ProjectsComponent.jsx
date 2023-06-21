import React, { useEffect, useRef, useState } from "react";
import { client, urlFor } from "../../client";
import { Link, useLocation } from "react-router-dom";

const ProjectsComponent = () => {
  const location = useLocation();
  const [projects, setProjects] = useState([]);
  const storyRef = useRef(null);

  const [projectsSlice, setProjectsSlice] = useState(projects.slice(0, 3));

  useEffect(() => {
    const query = '*[_type == "portfolio"]';
    client.fetch(query).then((response) => {
      const sortedResponse = response.map((item) => ({
        ...item,
        _createdAt: new Date(item._createdAt),
      }));
      // Sort the array by _createdAt in descending order
      const sliceProject = response.slice(0, 3);

      sortedResponse.sort((a, b) => b._createdAt - a._createdAt);
      setProjects(sortedResponse);
      setProjectsSlice(sliceProject);
    });
  }, []);

  useEffect(() => {
    if (storyRef.current) {
      storyRef.current.classList.add("swap");
    }
  }, []);
  return (
    <div id="projects" className="pt-20  ">
      <div className="flex items-center sm:gap-1  gap-3">
        <div className="flex flex-col   gap-1">
          <div className="w-8 bg-white ml-2 h-[2px]" />
          <div className="w-8 bg-white h-[2px]" />
          <span></span>
        </div>
        <h3 className="text-2xl md:text-xl">Projects</h3>
        <div className="flex items-center">
          <div className="w-80 md:w-40 sm:w-28 bg-white ml-2 h-[2px]" />
          <div className="w-3 rounded-full border-2 border-bg-white  h-3" />
        </div>
      </div>
      <div className="flex flex-col  gap-5">
        {location.pathname === "/"
          ? projectsSlice.map((project) => (
              <div
                key={project._id}
                className="flex md:flex-col md:even:flex-col even:flex-row-reverse sm:gap-2 gap-5  mt-5 "
              >
                <div className="flex-1">
                  <img
                    src={urlFor(project?.imageurl)}
                    alt=""
                    className="w-full sm:w-[350px]  rounded-xl h-[350px] sm:h-[12rem] object-fill"
                  />
                </div>
                <div className="flex flex-1  flex-col gap-3 ">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="flex  items-center justify-start md:grid md:grid-cols-2  gap-3 flex-wrap">
                    {project.stacks.map((item) => (
                      <div
                        key={item._key}
                        className="flex justify-center items-center gap-2 hover:bg-[rgb(255,255,255,0.2)]  transition duration-300 bg-[rgb(255,255,255,0.15)] sm:w-48 w-52 h-10 rounded-full"
                      >
                        <img
                          src={urlFor(item?.imageurl)}
                          alt=" "
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full gap-3">
                    {project.links.map((link) => (
                      <a
                        className="flex items-center hover:text-white"
                        key={link._key}
                        href={link.href}
                        target="_black"
                      >
                        <p className="text-[14px]">{link.website}</p>
                        <img
                          src={urlFor(link?.imageurl)}
                          alt=""
                          className="w-16 h-4"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : projects.map((project) => (
              <div
                key={project._id}
                className="flex md:flex-col md:even:flex-col even:flex-row-reverse sm:gap-0 gap-3 last:pb-20  mt-5"
              >
                <div className="flex-1">
                  <img
                    src={urlFor(project?.imageurl)}
                    alt=""
                    className="w-full sm:w-[350px]  rounded-xl h-[350px] sm:h-[12rem] object-fill"
                  />
                </div>
                <div className="flex flex-1 flex-col  gap-3 sm:gap-2">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="flex items-center md:grid md:grid-cols-2   justify-start gap-3  flex-wrap">
                    {project.stacks.map((item) => (
                      <div
                        key={item._key}
                        className="flex justify-center items-center gap-2 hover:bg-[rgb(255,255,255,0.2)]  transition duration-300 bg-[rgb(255,255,255,0.15)] sm:w-44  w-52 h-10 rounded-full"
                      >
                        <img
                          src={urlFor(item?.imageurl)}
                          alt=" "
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full gap-3">
                    {project.links.map((link) => (
                      <a
                        className="flex items-center hover:text-white"
                        key={link._key}
                        href={link.href}
                        target="_black"
                      >
                        <p className="text-[14px]">{link.website}</p>
                        <img
                          src={urlFor(link?.imageurl)}
                          alt=""
                          className="w-16 h-4"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        {location.pathname === "/" && (
          <Link
            to="projects"
            className=" mx-auto py-2 px-4 bg-[rgb(255,255,255,0.2)] rounded-md hover:text-white"
          >
            View More
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsComponent;

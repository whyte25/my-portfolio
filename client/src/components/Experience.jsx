import React, { useEffect, useState } from "react";
import { client } from "../../client";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';
    client.fetch(query).then((response) => {
      const sortedResponse = response.map((item) => ({
        ...item,
        _createdAt: new Date(item._createdAt),
      }));
      // Sort the array by _createdAt in descending order
      sortedResponse.sort((a, b) => b._createdAt - a._createdAt);
      setExperience(sortedResponse);
    });
  }, []);
  return (
    <div className="pt-10 pb-24">
      <h3 className="text-xl ">I have been able to create solutions for:</h3>
      <div className="flex flex-col mt-3 gap-10">
        {experience.map((item, i) => (
          <div className="flex flex-col gap-2">
            <div className="flex items-center  gap-3">
              <div className="flex flex-col   gap-1">
                <div className="w-8 bg-[rgb(255,255,255,0.40)] ml-2 h-[2px]" />
                <div className="w-8 bg-[rgb(255,255,255,0.40)] h-[2px]" />
                <span></span>
              </div>
              <h3 className="text-base text-[rgb(255,255,255,0.40)]">
                {item.company}
              </h3>
            </div>
            <h3>{item.position}</h3>
            <p className="text-sm text-[rgb(255,255,255,0.40)]">
              {item.timeFrame}
            </p>
            <ol>
              {item.tasks.map((task) => (
                <li className="list-disc ml-4 mt-2 w-[80%]">{task}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";

const Stack = () => {
  const [stack, setStack] = useState([]);
  console.log("🚀 ~ file: Stack.jsx:6 ~ Stack ~ stack:", stack);

  useEffect(() => {
    const query = '*[_type == "stack"]';
    client.fetch(query).then((response) => {
      const sortedResponse = response.map((item) => ({
        ...item,
        _createdAt: new Date(item._createdAt),
      }));
      // Sort the array by _createdAt in descending order
      sortedResponse.sort((a, b) => a._createdAt - b._createdAt);
      setStack(sortedResponse);
    });
  }, []);

  return (
    <div>
      <h3 className="text-xl my-3">My technology stack:</h3>
      <div className="flex items-center md:grid md:grid-cols-3 sm:grid-cols-2  justify-start gap-3 flex-wrap">
        {stack.map((item) => (
          <div className="flex justify-center items-center gap-2 hover:bg-[rgb(255,255,255,0.2)]  transition duration-300 bg-[rgb(255,255,255,0.15)] sm:w-44  w-52 h-10 rounded-full">
            <img
              src={urlFor(item.imageurl)}
              alt=" "
              className="w-8 h-8 rounded-full object-cover"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;

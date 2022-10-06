import React from "react";

const Project = ({ element }) => {
  return (
      <div className="max-w-sm rounded-3xl bg-neutral-200  hover:scale-105 transform box-border dark:shadow-2xl dark:bg-gray-700  transition duration-500   shadow-inner p-4">
        <a href={element.url} target="_blank" rel="noopener noreferrer">
          <img
            className=" rounded-lg max-h-60"
            src={element.image}
            alt={element.name}
          />
          
          <div className="px-2 py-2">
            <div className="font-bold text-xl dark:text-white  mb-2">{element.name}</div>
            <p className="text-gray-700 dark:text-gray-400 text-justify text-sm leading-6">{element.description}</p>
          </div>
          <div className="px-6 pt-1 pb-2">
            {element.techStack.map((stack, i) => (
              <span
                key={i}
                className="inline-block bg-neutral-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {stack}
              </span>
            ))}
          </div>
        </a>
     </div>
  );
};

export default Project;

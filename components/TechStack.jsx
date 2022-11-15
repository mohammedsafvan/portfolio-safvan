import React from "react";

const TechStack = ({ url, imageUrl,name }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-2"></div>
      <img
        src={imageUrl}
        width="36"
        height="36"
        alt={name}
        className="w-10 md:w-14 transform  transition duration-500 hover:scale-125"
      />
    </a>
  );
};

export default TechStack;

import React from "react";

const Social = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className=" hover:text-brand">
      {icon}
    </a>
  );
};

export default Social;

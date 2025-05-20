import React from "react";
import "./Loader.css"; // We'll put the CSS in a separate file

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader ml-10 mt-5 mb-5"></div>
    </div>
  );
};

export default Loader;

import React from "react";
import { useLocation } from "react-router-dom";

const Media = () => {
  const location = useLocation();
  console.log(location);
  return <div className="Media">Media</div>;
};

export default Media;

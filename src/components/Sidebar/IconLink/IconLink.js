import React from "react";
import { Link } from "react-router-dom";

import useMatchedRoute from "../../../hooks/useMatchedRoute";

const IconLink = (path, pathPattern, className, children) => {
  const routeMatches = useMatchedRoute(pathPattern);

  return (
    <Link to={path} className="Sidebar__link">
      {children}
    </Link>
  );
};

export default IconLink;

import React from "react";
import { Link } from "react-router-dom";

import useMatchedRoute from "../../../hooks/useMatchedRoute";

const IconLink = ({ path, pathPatterns, className, children }) => {
  let routeMatches = useMatchedRoute(pathPatterns);

  return (
    <Link
      to={path}
      className={`Sidebar__link ${
        routeMatches ? "Sidebar__link--active" : "Sidebar__link--inactive"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default IconLink;

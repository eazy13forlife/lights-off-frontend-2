import React from "react";
import { useLocation, matchPath } from "react-router-dom";

const useMatchedRoute = (pathPattern) => {
  const location = useLocation();

  const matchedRoute = matchPath(
    {
      path: pathPattern,
      exact: true,
    },
    location.pathname
  );

  return matchedRoute;
};

export default useMatchedRoute;

import { useLocation, matchPath } from "react-router-dom";

const useMatchedRoute = (pathPatterns) => {
  const location = useLocation();

  //check if any of the patterns we are looking to match matches
  for (let i = 0; i < pathPatterns.length; i++) {
    const pattern = pathPatterns[i];

    const matchObject = matchPath(
      {
        path: pattern,
        exact: true,
        strict: true,
      },
      location.pathname
    );

    if (matchObject) {
      return matchObject;
    }
  }

  return null;
};

export default useMatchedRoute;

import React from "react";
import useUserAuthorization from "../hooks/useUserAuthorization";
import { Navigate } from "react-router-dom";

//for if user is already signed up and trying to access an entry page
const SignedInRoute = ({ children, redirectPath }) => {
  const user = useUserAuthorization();

  if (!user) {
    return children;
  }

  return <Navigate to={redirectPath} replace />;
};

export default SignedInRoute;

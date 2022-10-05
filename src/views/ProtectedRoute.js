import React from "react";
import { Navigate } from "react-router-dom";
import useUserAuthorization from "../hooks/useUserAuthorization";

//for if user is trying to access a private page without being authorized
const ProtectedRoute = ({ children }) => {
  const userInfo = useUserAuthorization();

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

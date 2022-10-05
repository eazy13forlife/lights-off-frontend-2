import React from "react";
import { useSelector } from "react-redux";

const useUserAuthorization = () => {
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  return userInfo;
};

export default useUserAuthorization;

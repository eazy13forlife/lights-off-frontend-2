import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../actions";

const useLogin = () => {
  const dispatch = useDispatch();

  const login = (userData) => {
    dispatch(loginUser(userData));
  };

  return login;
};

export default useLogin;

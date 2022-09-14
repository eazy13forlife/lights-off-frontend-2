import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../actions";

const useOnSubmit = () => {
  const dispatch = useDispatch();

  const signUpErrorsBackend = useSelector((state) => {
    return state.signUpErrorsBackend;
  });

  const onSubmit = async (userData) => {
    dispatch(createUser(userData));
  };

  return onSubmit;
};

export default useOnSubmit;

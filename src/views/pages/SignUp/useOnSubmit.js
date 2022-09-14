import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../actions";

const useOnSubmit = () => {
  const dispatch = useDispatch();

  const onSubmit = async (userData) => {
    dispatch(createUser(userData));
  };

  return onSubmit;
};

export default useOnSubmit;

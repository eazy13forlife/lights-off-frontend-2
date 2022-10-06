import React from "react";
import { useDispatch } from "react-redux";
import { createUser, removeCreateUserError } from "../../../actions";

const useOnSubmit = () => {
  const dispatch = useDispatch();

  //if submit function works, we should get a user object in our state, which will automatically lead to a redirect to home page because of signed in route.
  const onSubmit = async (userData) => {
    await dispatch(removeCreateUserError());

    await dispatch(createUser(userData));
  };

  return onSubmit;
};

export default useOnSubmit;

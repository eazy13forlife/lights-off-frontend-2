import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, removeCreateUserError } from "../../../actions";

const useOnSubmit = () => {
  const dispatch = useDispatch();

  const [clickSubmit, setClickSubmit] = useState(null);

  const signUpErrorsBackend = useSelector((state) => {
    return state.signUpErrorsBackend;
  });

  useEffect(() => {
    if (clickSubmit) {
      if (!signUpErrorsBackend) {
        //console.log("go to next page");
      } else {
        //console.log("stay on page");
        setClickSubmit(false);
      }
    }
  }, [clickSubmit]);

  const onSubmit = async (userData) => {
    await dispatch(removeCreateUserError());

    await dispatch(createUser(userData));

    setClickSubmit(true);
  };

  return onSubmit;
};

export default useOnSubmit;

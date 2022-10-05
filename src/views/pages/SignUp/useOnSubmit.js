import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, removeCreateUserError } from "../../../actions";
import { useNavigate } from "react-router-dom";

const useOnSubmit = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [clickSubmit, setClickSubmit] = useState(null);

  const signUpErrorsBackend = useSelector((state) => {
    return state.signUpErrorsBackend;
  });

  useEffect(() => {
    if (clickSubmit) {
      if (!signUpErrorsBackend) {
        navigate("/");
      } else {
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

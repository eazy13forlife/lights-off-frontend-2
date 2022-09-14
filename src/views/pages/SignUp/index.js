import React from "react";
import { useDispatch } from "react-redux";

import EntryPageLayout from "../../../components/EntryPageLayout";
import SignUpForm from "./SignUpForm/SignUpForm";
import { createUser } from "../../../actions";

const SignUp = () => {
  const dispatch = useDispatch();

  const onSubmit = async (userData) => {
    dispatch(createUser(userData));
  };

  return (
    <EntryPageLayout>
      <SignUpForm onSubmit={onSubmit} />
    </EntryPageLayout>
  );
};

export default SignUp;

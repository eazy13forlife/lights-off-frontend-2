import React from "react";
import { useSelector } from "react-redux";

import EntryPageLayout from "../../../components/EntryPageLayout";
import SignUpForm from "./SignUpForm/SignUpForm";
import useOnSubmit from "./useOnSubmit";

const SignUp = () => {
  const onSubmit = useOnSubmit();

  const signUpErrorsBackend = useSelector((state) => {
    return state.signUpErrorsBackend;
  });

  return (
    <EntryPageLayout errors={signUpErrorsBackend}>
      <SignUpForm onSubmit={onSubmit} />
    </EntryPageLayout>
  );
};

export default SignUp;

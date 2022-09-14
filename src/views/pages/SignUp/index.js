import React from "react";
import { useDispatch, useSelector } from "react-redux";

import EntryPageLayout from "../../../components/EntryPageLayout";
import SignUpForm from "./SignUpForm/SignUpForm";
import useOnSubmit from "./useOnSubmit";

const SignUp = () => {
  const onSubmit = useOnSubmit();

  const signUpErrorsBackend = useSelector((state) => {
    return state.signUpErrorsBackend;
  });

  return (
    <EntryPageLayout>
      {signUpErrorsBackend ? (
        <p className="color-error body-medium">{signUpErrorsBackend}</p>
      ) : null}
      <SignUpForm onSubmit={onSubmit} />
    </EntryPageLayout>
  );
};

export default SignUp;

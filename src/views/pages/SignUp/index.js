import React from "react";
import { useDispatch } from "react-redux";

import EntryPageLayout from "../../../components/EntryPageLayout";
import SignUpForm from "./SignUpForm/SignUpForm";
import useOnSubmit from "./useOnSubmit";

const SignUp = () => {
  const onSubmit = useOnSubmit();

  return (
    <EntryPageLayout>
      <SignUpForm onSubmit={onSubmit} />
    </EntryPageLayout>
  );
};

export default SignUp;

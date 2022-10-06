import React from "react";

import EntryPageLayout from "../../../components/EntryPageLayout";
import LoginForm from "./LoginForm/LoginForm.js";
import useLogin from "./useLogin";

const Login = () => {
  const onSubmit = useLogin();

  return (
    <EntryPageLayout>
      <LoginForm onSubmit={onSubmit} />
    </EntryPageLayout>
  );
};

export default Login;

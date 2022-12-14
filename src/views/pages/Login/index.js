import React from "react";
import { useSelector } from "react-redux";

import EntryPageLayout from "../../../components/EntryPageLayout";
import LoginForm from "./LoginForm/LoginForm.js";
import useLogin from "./useLogin";

const Login = () => {
  const onSubmit = useLogin();

  const loginErrorsBackend = useSelector((state) => {
    return state.loginErrorsBackend;
  });

  const isAttemptingLogin = useSelector((state) => {
    return state.isAttemptingLogin;
  });

  return (
    <EntryPageLayout
      errors={loginErrorsBackend}
      isAttempting={{
        message: "Waiting to log you in...",
        boolean: isAttemptingLogin,
      }}
    >
      <LoginForm onSubmit={onSubmit} />
    </EntryPageLayout>
  );
};

export default Login;

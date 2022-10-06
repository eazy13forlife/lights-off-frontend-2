import React from "react";

import EntryPageLayout from "../../../components/EntryPageLayout";
import LoginForm from "./LoginForm/LoginForm.js";
import { loginUser } from "../../../actions";

loginUser({ username: "dfadsfasdf", password: "dfasdfasdf" })();
const Login = () => {
  return (
    <EntryPageLayout>
      <LoginForm />
    </EntryPageLayout>
  );
};

export default Login;

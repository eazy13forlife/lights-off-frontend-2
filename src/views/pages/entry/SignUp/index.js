import React from "react";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import SignUpForm from "./SignUpForm/SignUpForm";
import "./index.scss";

const SignUp = () => {
  return (
    <div className="Entry">
      <div className="Entry__container">
        <BsFillLightbulbOffFill className="logo" />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import validationSchema from "./validation";
import { TextInput } from "../../../../components/FormInputs";
import "../../../../components/FormInputs/index.scss";

const SignUp = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Form className="EntryForm">
        <h1 className="EntryForm__heading heading-large">Sign Up</h1>
        <div className="EntryForm__group">
          <TextInput
            type="text"
            name="email"
            id="email"
            label="Email"
            formname="EntryForm"
          />
        </div>

        <div className="EntryForm__group">
          <TextInput
            type="text"
            name="username"
            id="username"
            label="Username"
            formname="EntryForm"
          />
        </div>

        <div className="EntryForm__group">
          <TextInput
            type="text"
            name="password"
            id="password"
            label="Password"
            formname="EntryForm"
          />
        </div>

        <button
          type="submit"
          className="EntryForm__submit-button button-primary button-primary--accent"
        >
          Submit
        </button>

        <div className="EntryForm__alt-option body-medium">
          <p className="color-light">Already have an account? </p>
          <Link
            to="/login"
            className="EntryForm__alt-option-link color-error no-underline"
          >
            Login
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUp;

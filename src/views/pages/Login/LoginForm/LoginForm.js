import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { TextInput } from "../../../../components/FormInputs";
import validationSchema from "./validation";

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="EntryForm">
        <h1 className="EntryForm__heading heading-large">Login</h1>
        <div className="EntryForm__group">
          <TextInput
            formname="EntryForm"
            name="username"
            type="text"
            id="username"
            label="Username"
          />
        </div>
        <div className="EntryForm__group">
          <TextInput
            formname="EntryForm"
            name="password"
            type="text"
            id="password"
            label="Password"
          />
        </div>
        <button
          type="submit"
          className="EntryForm__submit-button button-primary button-primary--accent"
        >
          Submit
        </button>

        <div className="EntryForm__alt-option body-medium">
          <p className="color-light">Don&apos;t have an account? </p>
          <Link
            to="/signup"
            className="EntryForm__alt-option-link color-error no-underline"
          >
            Sign Up
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;

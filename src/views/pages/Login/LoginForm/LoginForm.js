import React from "react";
import { Formik, Form } from "formik";

import { TextInput } from "../../../../components/FormInputs";
import validationSchema from "./validation";
import { Link } from "react-router-dom";

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

        <p>
          Don&apos;t have an account? <Link to="/signup">Sign Up </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;

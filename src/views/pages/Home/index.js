import React from "react";
import { Formik, Form } from "formik";
import validator from "validator";
import validationSchema from "./validation";
import { TextInput, Checkbox, Radio, SelectBox, TextArea } from "./inputs";

const Home = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="Form">
        <div className="EntryForm__group">
          <TextInput type="text" name="email" id="email" label="email" />
        </div>

        <div className="EntryForm__group">
          <TextInput
            type="text"
            name="firstName"
            id="firstName"
            label="first name"
          />
        </div>

        <div className="EntryForm__group">
          <TextInput
            type="text"
            name="lastName"
            id="lastName"
            label="last name"
          />
        </div>

        <div className="EntryForm__group">
          <p>Check all sports that you play</p>
          <div className="EntryForm__checkboxes">
            <Checkbox
              name="sport"
              value="basketball"
              id="basketball"
              label="basketball"
            />
            <Checkbox
              name="sport"
              value="football"
              id="football"
              label="football"
            />
            <Checkbox name="sport" value="soccer" id="soccer" label="soccer" />
          </div>
        </div>

        <div className="EntryForm__group">
          <p>Check your favorite sport</p>
          <div className="EntryForm__radios">
            <Radio
              name="sport"
              value="basketball"
              id="basketball"
              label="basketball"
            />
            <Radio
              name="sport"
              value="football"
              id="football"
              label="football"
            />
            <Radio name="sport" value="soccer" id="soccer" label="soccer" />
          </div>
        </div>

        <div className="EntryForm__group">
          <SelectBox name="sport" label="Choose a sport" id="newsport">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="pizza">Pizza</option>
          </SelectBox>
        </div>

        <div className="EntryForm__group">
          <TextArea
            name="thoughts"
            placeholder="My thoughts are so endless"
            label="Enter some of your thoughts below"
          />
        </div>
        <button type="submit" className="Form__group">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default Home;

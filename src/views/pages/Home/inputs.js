import { useField } from "formik";

import "./inputs.scss";

const generateErrorElement = (meta) => {
  return meta.touched && meta.error ? (
    <p className="EntryForm__error-message">{meta.error}</p>
  ) : null;
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className="EntryForm__input"
        {...field}
        {...props}
        placeholder={label}
      />
      {generateErrorElement(meta)}
    </>
  );
};

const Checkbox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="EntryForm__checkbox-group">
      <input
        type="checkbox"
        className="EntryForm__checkbox"
        {...props}
        {...field}
      />
      <label
        className="EntryForm__label EntryForm__label--checkbox"
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
};

const Radio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <div className="EntryForm__radio-group">
      <input type="radio" className="EntryForm__radio" {...props} {...field} />
      <label className="EntryForm__label EntryForm__label--radio">
        {label}
      </label>
    </div>
  );
};

const SelectBox = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="EntryForm__label" htmlFor={props.id}>
        {label}
      </label>
      <select className="EntryForm__select-box" {...props} {...field}>
        {children}
      </select>
    </>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="EntryForm__label" htmlFor={props.id}>
        {label}
      </label>
      <textarea className="EntryForm__text-area" {...props} {...field}>
        {props.placeholder}
      </textarea>
    </>
  );
};
export { TextInput, Checkbox, Radio, SelectBox, TextArea };

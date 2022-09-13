import { useField } from "formik";

const generateErrorElement = (meta, formname) => {
  return meta.touched && meta.error ? (
    <p className={`${formname}__error-message`}>{meta.error}</p>
  ) : null;
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className={`${props.formname}__input body-medium ${
          meta.touched && meta.error
            ? `${props.formname}__input--error`
            : `${props.formname}__input--success`
        }`}
        {...field}
        {...props}
        placeholder={label}
      />
      {generateErrorElement(meta, props.formname)}
    </>
  );
};

const Checkbox = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <div className={`${props.formname}__checkbox-group`}>
      <input
        type="checkbox"
        className={`${props.formname}__checkbox`}
        {...props}
        {...field}
      />
      <label
        className={`${props.formname}__label ${props.formname}__label--checkbox`}
        htmlFor={props.id}
      >
        {label}
      </label>
    </div>
  );
};

const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });

  return (
    <div className={`${props.formname}__radio-group`}>
      <input
        type="radio"
        className={`${props.formname}__radio`}
        {...props}
        {...field}
      />
      <label
        className={`${props.formname}__label ${props.formname}__label--radio`}
      >
        {label}
      </label>
    </div>
  );
};

const SelectBox = ({ children, label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label className={`${props.formname}__label`} htmlFor={props.id}>
        {label}
      </label>
      <select className={`${props.formname}__select-box`} {...props} {...field}>
        {children}
      </select>
    </>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label className={`${props.formname}__label`} htmlFor={props.id}>
        {label}
      </label>
      <textarea
        className={`${props.formname}__text-area`}
        {...props}
        {...field}
      >
        {props.placeholder}
      </textarea>
    </>
  );
};
export { TextInput, Checkbox, Radio, SelectBox, TextArea };

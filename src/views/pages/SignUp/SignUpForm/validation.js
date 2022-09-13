import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Invalid email"),
  username: Yup.string()
    .required("Required")
    .min(4, "Must be at least 4 characters"),
  password: Yup.string()
    .required("Required")
    .min(4, "Must be at least 4 characters"),
});

export default validationSchema;

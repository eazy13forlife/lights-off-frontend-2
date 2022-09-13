import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Invalid email"),
  firstName: Yup.string()
    .required("Required")
    .min(10, "Must be at least 10 characters")
    .max(30, "Must be no more than 30 characters"),
});

export default validationSchema;

/* eslint-disable */
import * as Yup from "yup";
const emailRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name is too short ")
    .max(25, "Name must be at least 25 characters")
    .required("Name is Required"),
  dob: Yup.string().required("Date is Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(20, "Must be 20 characters or less ")
    .required("Please provide your password"),
  email: Yup.string()
    .trim()
    .required("Required")
    .email("Invalid email")
    .matches(emailRegex, "Invalid email"),
  createdOn: Yup.date().default(() => new Date()),
});

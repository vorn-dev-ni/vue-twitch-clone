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
  imgUri: Yup.string().nullable(),
  createdOn: Yup.date().default(() => new Date()),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Required")
    .email("Invalid email")
    .matches(emailRegex, "Invalid email"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(20, "Must be 20 characters or less ")
    .required("Please provide your password"),
});

export const tweetComposeSchema = Yup.object().shape({
  description: Yup.string()
    .min(5, "Description is too short at least 5 characters")
    .max(250, "Description must be less then 250 characters")
    .trim()
    .required("Description is required"),
  images: Yup.array().max(3, "Only 3 images are allowed").nullable(),
  tags: Yup.array().max(3, "Only 3 tags are allowed").nullable(),
  replies: Yup.array().nullable(),
  createdOn: Yup.date().default(() => new Date()),
});
export const userProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name is too short ")
    .max(25, "Name must be at least 25 characters")
    .required("Name is Required"),
  bio: Yup.string()
    .min(10, "Bio is too short at least 10 characters")
    .max(250, "Bio must be less then 100 characters")
    .trim()
    .nullable(),
  image: Yup.string().nullable(),
  dob: Yup.string().required("Date is Required"),
  location: Yup.string()
    .min(2, "Location is too short ")
    .max(25, "Location must be at least 25 characters")
    .nullable(),
});

import * as Yup from "yup";
export const subscribeSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Please enter a valid email"),
});

export const signupSchema = Yup.object({
  username: Yup.string().required("Pleasse Enter username"),
  email: Yup.string().email("Invalid email").required("Please enter a valid email"),
  password: Yup.string().required("Please enter a valid password"),
});

export const signinSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Pleasse Enter Email"),
  password: Yup.string().required("Please enter a valid password"),
});

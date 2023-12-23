import * as Yup from "yup";
export const subscribeSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Please enter a valid email"),
});

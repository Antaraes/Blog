import { signUpUser } from "@/api";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUpService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(signUpUser, {
    onSuccess: (data) => {
      toast.success(data.data.message);

      navigate("/auth/signin");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  const handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const initialValues = {
    username: "kyaw",
    password: "Password123!",
    confirm_password: "Password123!",
    email: "kyaw@gmail.com",
  };

  const handleSubmit = (values) => {
    try {
      signUp(values);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return {
    isLoading,
    handleValidate,
    initialValues,
    handleSubmit,
  };
};

export default SignUpService;

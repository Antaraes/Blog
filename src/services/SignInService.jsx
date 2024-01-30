import { signInUser } from "@/api";
import { addAccessToken, addRefreshToken, addUser } from "@/redux/user/userSlice";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignInService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: signIn,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(signInUser, {
    onSuccess: (data) => {
      const user = data.data.data.user;
      const accessToken = data.data.data.accessToken;
      const refreshToken = data.data.data.refreshToken;
      toast.success(data.data.message);
      dispatch(addUser(user));
      dispatch(addAccessToken(accessToken));
      dispatch(addRefreshToken(refreshToken));
      navigate("/blog");
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
    email: "kyaw@gmail.com",
    password: "Password123!",
  };

  const handleSubmit = async (values) => {
    try {
      signIn(values);
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

export default SignInService;

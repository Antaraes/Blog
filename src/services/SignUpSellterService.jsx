import React, { useState } from "react";

const SignUpSellterService = () => {
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
    email: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return {
    handleValidate,
    initialValues,
    handleSubmit,
  };
};

export default SignUpSellterService;

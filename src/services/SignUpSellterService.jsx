import React, { useState } from "react";

const SignUpSellterService = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const onChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignupSellterService");
    console.log(formData);
    e.reset();
  };
  return {
    ...formData,
    handleSubmit,
    onChange,
  };
};

export default SignUpSellterService;

import React from "react";
import { Container, Image, Navbar, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { boderHighLight, google, sign } from "@/assets/images";
import { signinSchema } from "@/helper/validation/user";
import { Formik } from "formik";
import SignInService from "@/services/SignInService";
import Spinner from "@/components/Spinner";

const SignInPage = () => {
  const navigate = useNavigate();
  const { isLoading, handleSubmit, initialValues } = SignInService();

  const formFields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  return (
    <Container
      fluid="md"
      className="d-md-flex justify-content-md-center align-items-md-center gap-5"
    >
      <div className="position-relative w-100 ">
        <Navbar.Brand
          as={Link}
          to="/"
          style={styles.title}
          className="position-absolute d-none d-md-block p-3"
        >
          NORDIC ROSE
        </Navbar.Brand>
        <Image
          src={sign}
          alt="sign"
          height={window.innerHeight}
          className="w-100"
          style={{ maxWidth: "100vw" }}
        />
      </div>
      <div className=" " style={{ lineHeight: 2, width: "90vw " }}>
        <div className="d-flex justify-content-center align-items-center">
          <p style={{ ...styles.title, width: "100%" }}>Sign In</p>
          <button
            className="w-25"
            style={{ border: "none", background: "none", fontWeight: "bold" }}
            onClick={() => navigate("/")}
          >
            Skip
          </button>
        </div>
        <div className="d-grid gap-2">
          <Button
            variant="outline-dark"
            className="d-flex gap-3 justify-content-center align-items-center"
            style={styles.button}
          >
            <Image src={google} />
            Connect with Google
          </Button>
          <div className="d-flex justify-content-center">
            <Image src={boderHighLight} className="align-items-center" />
          </div>
          <Formik
            initialValues={initialValues}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={signinSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
              <Form className="d-grid gap-3 " onSubmit={handleSubmit}>
                {formFields.map((field) => (
                  <Form.Group key={field.name} className="">
                    <Form.Control
                      style={{ height: "50px" }}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[field.name]}
                    />
                    {errors[field.name] && <p className="text-danger">{errors[field.name]}</p>}
                  </Form.Group>
                ))}
                <div className="d-md-flex justify-content-between align-items-center">
                  <Button
                    className="w-100"
                    style={styles.button}
                    variant="outline-dark"
                    onClick={() => navigate("/auth/signup")}
                  >
                    Sign Up
                  </Button>
                  <p className=" p-md-4 text-center">or</p>
                  <Button className="w-100" style={styles.button} variant="dark" type="submit">
                    {isLoading ? <Spinner sm light /> : "Sign In"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};

export default SignInPage;

const styles = {
  title: {
    fontWeight: 700,
    fontSize: 48,
    fontFamily: "Inter",
  },
  button: {
    height: "60px",

    display: "block",
  },
};

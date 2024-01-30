import React from "react";
import { Container, Image, Navbar, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { boderHighLight, google, sign } from "@/assets/images";
import { signupSchema } from "@/helper/validation/user";
import SignUpService from "@/services/SignUpService";
import { Formik } from "formik";
import Spinner from "@/components/Spinner";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isLoading, handleSubmit, initialValues } = SignUpService();

  const formFields = [
    { name: "username", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "name@example.com" },
    { name: "password", type: "password", placeholder: "Password" },
    { name: "confirm_password", type: "password", placeholder: "Confirm_password" },
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
        <p style={styles.title}>Create New Account</p>
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
            validationSchema={signupSchema}
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
                  <Button className="w-100" style={styles.button} variant="dark" type="submit">
                    {isLoading ? <Spinner sm /> : "Sign Up"}
                  </Button>
                  <p className=" p-md-4 text-center">or</p>
                  <Button
                    className="w-100"
                    style={styles.button}
                    variant="outline-dark"
                    type="submit"
                    onClick={() => navigate("/auth/signin")}
                  >
                    Sign In
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

export default SignUpPage;

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

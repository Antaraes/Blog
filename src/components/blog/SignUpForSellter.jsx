import SignUpSellterService from "@/services/SignUpSellterService";
import { Formik } from "formik";
import React from "react";
import { Card, Button, Form, Tooltip } from "react-bootstrap";
import TopTooltip from "../common/TopTooltip";
import { subscribeSchema } from "@/helper/validation/user";
const SignUpForSellter = () => {
  const { initialValues, handleSubmit, handleValidate } = SignUpSellterService();
  return (
    <Card className="text-center mb-4">
      <Card.Header className="bg-dark"></Card.Header>
      <Card.Body>
        <Card.Title>Sign up for the newsletter</Card.Title>
        <Card.Text>
          If you want relevant updates occasionally, sign up for the private newsletter. Your email
          is never shared.
        </Card.Text>
        <Formik
          initialValues={initialValues}
          validateOnBlur={true}
          validateOnChange={false}
          validationSchema={subscribeSchema}
          // validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
            <Form
              className="d-flex justify-content-center align-items-center text-center mx-auto"
              onSubmit={handleSubmit}
            >
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Sign Up
              </Button>
              {errors.email && (
                <Tooltip placement="topRight" title={"Error"}>
                  <Button>TR</Button>
                </Tooltip>
              )}
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default SignUpForSellter;

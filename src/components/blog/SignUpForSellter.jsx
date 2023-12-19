import SignUpSellterService from "@/services/SignUpSellterService";
import React from "react";
import { Card, Button, Form } from "react-bootstrap";
const SignUpForSellter = () => {
  const { email, handleSubmit, onChange } = SignUpSellterService();
  return (
    <Card className="text-center mb-4">
      <Card.Header className="bg-dark"></Card.Header>
      <Card.Body>
        <Card.Title>Sign up for the newsletter</Card.Title>
        <Card.Text>
          If you want relevant updates occasionally, sign up for the private newsletter. Your email
          is never shared.
        </Card.Text>
        <Form
          className="d-flex justify-content-center align-items-center text-center mx-auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => onChange("email", e)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpForSellter;

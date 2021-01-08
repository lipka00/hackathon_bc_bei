import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [id_doc, setEmail] = useState("");

  function validateForm() {
    return id_doc.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/home');
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label id="labelLogin">ID</Form.Label>
          <Form.Control
            autoFocus
            type="id_doc"
            value={id_doc}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button id = "loginButton" block size="lg" type="submit" onClick={handleLogin} disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
  

  /*
  export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
  }*/
}

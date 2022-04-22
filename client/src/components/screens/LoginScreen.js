import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log("Did I run?");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const loginHandler = async (evt) => {
    evt.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <LoginMain>
      <LoginScreenForm onSubmit={loginHandler}>
        <LoginTitle>Login</LoginTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginField>
          <LoginLabel htmlFor="email">Email:</LoginLabel>
          <LoginInput
            type="email"
            required
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            tabIndex={1}
          />
        </LoginField>
        <LoginField>
          <LoginLabel htmlFor="password">Password:</LoginLabel>
          <LoginInput
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            tabIndex={2}
          />
        </LoginField>

        <LoginButton type="submit" tabIndex={3}>
          Login
        </LoginButton>
        <LoginSubtext>
          Don't have an account?{" "}
          <RegisterLink to="/register">Register</RegisterLink>
        </LoginSubtext>
      </LoginScreenForm>
    </LoginMain>
  );
};

export default LoginScreen;

const LoginMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginScreenForm = styled.form`
  width: 580px;
  padding: 1.5rem;
  background: #480048;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: #ffffff;
`;

const LoginTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const LoginField = styled.div`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background: #480048;
  outline-width: 0;
  font-size: 1rem;
`;

const LoginLabel = styled.label`
  color: #ffffff;
  font-weight: 500;
  padding-right: 5px;
`;

const LoginInput = styled.input`
  color: #000000;
  font-size: 0.8rem;
  font-weight: 200;
  padding: 5px 5px;
`;

const LoginButton = styled.button`
  padding: 10px 30px;
  border-radius: 3px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  color: #ffffff;
  background: #a81878;
`;

const LoginSubtext = styled.p`
  padding-left: 20px;
  font-size: 0.7rem;
  display: block;
  margin: 0.5rem 0;
`;

const RegisterLink = styled(Link)`
  text-decoration: underline;
  color: #ffffff;
  font-weight: 700;
`;

const ErrorMessage = styled.p`
  width: 100%;
  display: inline-block;
  padding: 5px;
  background: red;
  color: #fff;
  text-align: center;
  margin: 0.5rem 0;
`;

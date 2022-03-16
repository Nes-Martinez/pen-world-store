import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate.push("/");
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
      navigate.push("/");
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

        <LoginInput>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            tabIndex={1}
          />
        </LoginInput>
        <LoginInput>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            tabIndex={2}
          />
        </LoginInput>

        <LoginButton type="submit" tabIndex={3}>
          Login
        </LoginButton>
        <LoginSubtext>
          Don't have an account? <Link to="/register">Register</Link>
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
  width: 380px;
  padding: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const LoginTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

const LoginInput = styled.div`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background-color: #eee;
  outline-width: 0;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
`;

const LoginSubtext = styled.p`
  font-size: 0.7rem;
  display: block;
  margin: 0.5rem 0;
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

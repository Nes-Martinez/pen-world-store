import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate.push("/");
    }
  }, [navigate]);

  const registerHandler = async (evt) => {
    evt.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password },
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
    <RegisterMain>
      <RegisterScreenForm onSubmit={registerHandler}>
        <RegisterTitle>Register</RegisterTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <RegisterInput>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </RegisterInput>
        <RegisterInput>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(evt) => setConfirmPassword(evt.target.value)}
          />
        </RegisterInput>
        <RegisterButton>Register</RegisterButton>
        <RegisterSubtext>
          Already have an account? <Link to="/login">Login</Link>
        </RegisterSubtext>
      </RegisterScreenForm>
    </RegisterMain>
  );
};

export default RegisterScreen;

const RegisterMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterScreenForm = styled.form`
  width: 380px;
  padding: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const RegisterTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

const RegisterInput = styled.div`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background-color: #eee;
  outline-width: 0;
  font-size: 1rem;
`;

const RegisterButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
`;

const RegisterSubtext = styled.p`
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

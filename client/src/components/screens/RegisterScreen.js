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
      navigate("/");
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
      navigate("/");
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
        <RegisterField>
          <RegisterLabel htmlFor="name">Username:</RegisterLabel>
          <RegisterInput
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </RegisterField>
        <RegisterField>
          <RegisterLabel htmlFor="email">Email:</RegisterLabel>
          <RegisterInput
            type="email"
            required
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </RegisterField>
        <RegisterField>
          <RegisterLabel htmlFor="password">Password:</RegisterLabel>
          <RegisterInput
            type="password"
            required
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </RegisterField>
        <RegisterField>
          <RegisterLabel htmlFor="confirmPassword">
            Confirm Password:
          </RegisterLabel>
          <RegisterInput
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(evt) => setConfirmPassword(evt.target.value)}
          />
        </RegisterField>
        <RegisterButton>Register</RegisterButton>
        <RegisterSubtext>
          Already have an account? <LoginLink to="/login">Login now.</LoginLink>
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
  width: 580px;
  padding: 1.5rem;
  background: #480048;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: #ffffff;
`;

const RegisterTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const RegisterField = styled.div`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background: #480048;
  outline-width: 0;
  font-size: 1rem;
`;

const RegisterLabel = styled.label`
  color: #ffffff;
  font-weight: 500;
  padding-right: 5px;
`;

const RegisterInput = styled.input`
  color: #000000;
  font-size: 0.8rem;
  font-weight: 200;
  padding: 5px 5px;
`;

const RegisterButton = styled.button`
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

const RegisterSubtext = styled.p`
  padding-left: 20px;
  font-size: 0.7rem;
  display: block;
  margin: 0.8rem 0;
`;

const LoginLink = styled(Link)`
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

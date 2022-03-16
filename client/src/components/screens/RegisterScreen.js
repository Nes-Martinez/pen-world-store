import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import React from "react";

const RegisterScreen = () => {
  return (
    <RegisterMain>
      <RegisterScreenForm>
        <RegisterTitle>Register</RegisterTitle>
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
            type="text"
            required
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </RegisterInput>
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

const RegisterInput = styled.input`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background-color: #eee;
  outline-width: 0;
  font-size: 1rem;
`;


.register-screen__subtext {
  font-size: 0.7rem;
  display: block;
  margin: 0.5rem 0;
}
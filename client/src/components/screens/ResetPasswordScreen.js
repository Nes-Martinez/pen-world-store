import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ResetPasswordScreen = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (evt) => {
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
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/passwordreset/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <ResetPasswordMain>
      <ResetPasswordForm onSubmit={resetPasswordHandler}>
        <ResetPasswordTitle>Forgot Password</ResetPasswordTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && (
          <SuccessMessage>
            {success} <Link to="/login">Login</Link>
          </SuccessMessage>
        )}
        <ResetPasswordInput>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ResetPasswordInput>
        <ResetPasswordInput>
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </ResetPasswordInput>
        <ResetPasswordButton type="submit">Reset Password</ResetPasswordButton>
      </ResetPasswordForm>
    </ResetPasswordMain>
  );
};

export default ResetPasswordScreen;

const ResetPasswordMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResetPasswordForm = styled.form`
  width: 380px;
  padding: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const ResetPasswordTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
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

const SuccessMessage = styled.p`
  width: 100%;
  display: inline-block;
  padding: 5px;
  background: green;
  color: #fff;
  text-align: center;
  margin: 0.5rem 0;
`;

const ResetPasswordInput = styled.div`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background-color: #eee;
  outline-width: 0;
  font-size: 1rem;
`;

const ResetPasswordButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
`;

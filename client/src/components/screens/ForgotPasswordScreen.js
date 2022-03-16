import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (evt) => {
    evt.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <ForgotPasswordMain>
      <ForgotPasswordForm onSubmit={forgotPasswordHandler}>
        <ForgotPasswordTitle>Forgot Password</ForgotPasswordTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <ForgotPasswordInput>
          <ForgotPasswordSubtext>
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </ForgotPasswordSubtext>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </ForgotPasswordInput>
        <ForgotPasswordButton type="submit">Send Email</ForgotPasswordButton>
      </ForgotPasswordForm>
    </ForgotPasswordMain>
  );
};

export default ForgotPasswordScreen;

const ForgotPasswordMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForgotPasswordForm = styled.form`
  width: 380px;
  padding: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const ForgotPasswordTitle = styled.h3`
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

const ForgotPasswordInput = styled.div`
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  background-color: #eee;
  outline-width: 0;
  font-size: 1rem;
`;

const ForgotPasswordSubtext = styled.p`
  font-size: 0.7rem;
  display: block;
  margin: 0.5rem 0;
`;

const ForgotPasswordButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
`;

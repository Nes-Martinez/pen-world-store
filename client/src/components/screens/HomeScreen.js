import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../elements/Navbar";
import Announcement from "../elements/Announcement";

const HomeScreen = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <Announcement />

      <Navbar />
      <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
    </>
  );
};

export default HomeScreen;

const LogoutButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
`;

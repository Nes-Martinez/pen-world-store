import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        console.log("Heres data", { data });
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <PrivateData>{privateData}</PrivateData>
      <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
    </>
  );
};

export default HomeScreen;

const PrivateData = styled.div`
  background: green;
  color: white;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
`;

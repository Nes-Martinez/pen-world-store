import React, { Fragment, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  return localStorage.getItem("authToken") ? (
    component
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

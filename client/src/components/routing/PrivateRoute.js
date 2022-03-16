import React, { Fragment } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <Routes>
        <Route
          {...rest}
          render={(props) =>
            localStorage.getItem("authToken") ? (
              <Component {...props} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Fragment>
  );
};

export default PrivateRoute;

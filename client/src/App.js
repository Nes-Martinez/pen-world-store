import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import HomeScreen from "./components/screens/HomeScreen";
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import AllProducts from "./components/screens/AllProducts";
import Backdrop from "./components/elements/Backdrop";
import MobileMenu from "./components/elements/MobileMenu";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <Backdrop isOpen={isOpen} toggle={toggle} />
        <MobileMenu isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<HomeScreen toggle={toggle} />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordScreen />}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            element={<ResetPasswordScreen />}
          />
          <Route
            exact
            path="/private"
            element={
              <PrivateRoute>
                <PrivateScreen />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

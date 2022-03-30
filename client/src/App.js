import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import Backdrop from "./components/elements/Backdrop";
import MobileMenu from "./components/elements/MobileMenu";
import Navbar from "./components/elements/Navbar";
import SignUp from "./components/elements/SignUp";
import Footer from "./components/elements/Footer";

import HomeScreen from "./components/screens/HomeScreen";
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import AllProductsScreen from "./components/screens/AllProductsScreen";
import SingleProductScreen from "./components/screens/SingleProductScreen";
import CartScreen from "./components/screens/CartScreen";

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
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" element={<HomeScreen toggle={toggle} />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/products" element={<AllProductsScreen />} />
          <Route exact path="/products/:id" element={<SingleProductScreen />} />
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
        <SignUp />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

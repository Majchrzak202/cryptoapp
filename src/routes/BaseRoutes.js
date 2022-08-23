import React from "react";
import { Routes, Route } from "react-router";



import Portfolio from "../screens/Portfolio";
import CoinPage from "../components/coins/coin-page/CoinPage";
import About from "../screens/About";
import Contact from "../screens/Contact";
import SignUp from "../components/login/Signup";
import Login from "../components/login/Login";
import ProtectedRoute from "../firebase/ProtectedRoute";
import Settings from "../screens/Settings";
import LoginMemo from "../screens/LoginMemo";
import HomePage from "../screens/HomePage";
import CryptoPage from "../screens/CryptoPage";



const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cryptos" element={<CryptoPage />} />
      <Route path="/loginmemo" element={<LoginMemo />}></Route>
      <Route
        path="/portfolio"
        element={
          <ProtectedRoute>
            <Portfolio />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/coinpage/:id" element={<CoinPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default BaseRoutes;

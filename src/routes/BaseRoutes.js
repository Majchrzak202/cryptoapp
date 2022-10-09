import React from "react";
import { Route } from "react-router";
import Portfolio from "../screens/portfolio/Portfolio";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import SignUp from "../components/login/Signup";
import Login from "../components/login/Login";
import ProtectedRoute from "../firebase/ProtectedRoute";
import Settings from "../screens/Settings";
import LoginMemo from "../components/login/LoginMemo";
import HomePage from "../screens/HomePage";
import CryptoPage from "../screens/CryptoPage";
import ForgotPassword from "../components/login/ForgotPassword";
import Main from "../screens/main/Main";
import CoinPage from "../components/coins/coin-page/CoinPage";
import CustomRoutes from "./CustomRoutes";

const BaseRoutes = () => {
  return (
    <CustomRoutes>
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
      <Route path="/forgot" element={<ForgotPassword />}></Route>
      <Route path="/main" element={<Main />}></Route>
    </CustomRoutes>
  );
};

export default BaseRoutes;

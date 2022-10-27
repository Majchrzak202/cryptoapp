import React, { lazy } from "react";
import { Route } from "react-router";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import ProtectedRoute from "../firebase/ProtectedRoute";
import HomePage from "../screens/HomePage";
import Main from "../screens/main/Main";
import CustomRoutes from "./CustomRoutes";

const Portfolio = lazy(() => import("../screens/portfolio/Portfolio"));
const SignUp = lazy(() => import("../components/login/Signup"));
const Settings = lazy(() => import("../screens/Settings"));
const LoginMemo = lazy(() => import("../components/login/LoginMemo"));
const ForgotPassword = lazy(() => import("../components/login/ForgotPassword"));
const CryptoPage = lazy(() => import("../screens/CryptoPage"));
const CoinPage = lazy(() => import("../components/coins/coin-page/CoinPage"));
const Login = lazy(() => import("../components/login/Login"));

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

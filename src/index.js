import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserAuthContextProvider from "./context/UserAuthContextProvider";
import PortfolioContextProvider from "./context/PortfolioContextProvider";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserAuthContextProvider>
        <PortfolioContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PortfolioContextProvider>
      </UserAuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

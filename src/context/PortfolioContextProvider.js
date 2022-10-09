import React, { useContext, createContext, useState, useEffect } from "react";
import { useAuth } from "./UserAuthContextProvider";

const userPortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState({});
  const { user } = useAuth();

  const addToPortfolioHandler = (coin) => {
    setPortfolio(coin.coin);
  };
  useEffect(() => {
    addCoinsToDatabase();
  }, [portfolio]);

  if (portfolio === "undefined") {
    return null;
  }

  if (user !== null) {
  }

  const addCoinsToDatabase = async () => {
    let coinId = portfolio.name;
    const response = await fetch(
      `https://cryptocurrency-project-b4951-default-rtdb.firebaseio.com/${user.uid}/${coinId}.json`,
      {
        method: "put",
        body: JSON.stringify(portfolio),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  return (
    <userPortfolioContext.Provider
      value={{ portfolio, addToPortfolioHandler, addCoinsToDatabase }}
    >
      {children}
    </userPortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
export function usePortfolio() {
  return useContext(userPortfolioContext);
}

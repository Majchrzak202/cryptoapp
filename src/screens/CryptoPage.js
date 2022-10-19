import React, { useState, useEffect } from "react";
import CoinList from "../components/coins/CoinList";

const CryptoPage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD"
      );
      const data = await response.json();
      setCoins(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginBottom: "100px" }}>
      <CoinList coins={coins} />
    </div>
  );
};

export default CryptoPage;

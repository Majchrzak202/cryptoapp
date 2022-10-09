import React, { useEffect, useState } from "react";
import { Card, Box, Typography, Button } from "@material-ui/core";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useParams } from "react-router";
import { Skeleton } from "@mui/material";
import { usePortfolio } from "../../../context/PortfolioContextProvider";
import useStyles from "./Styles";
import RandomCoins from "./random-coins/RandomCoins";
import MoreInfo from "./more-info/MoreInfo";
import Chart from "./chart/Chart";

const CoinPage = () => {
  const [coin, setCoin] = useState("");
  const [randomCoins, setRandomCoins] = useState([]);
  const { id } = useParams();
  const classes = useStyles();
  const { addToPortfolioHandler } = usePortfolio();

  useEffect(() => {
    const fetchCoin = async () => {
      const response = await fetch(
        `https://api.coinstats.app/public/v1/coins/${id}?currency=USD`
      );
      const data = await response.json();
      setCoin(data);
    };
    fetchCoin();
  }, [id]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=300&currency=USD"
      );
      const data = await response.json();

      const result = await data.coins.map((a) => a.id);
      const shuffled = [...result].sort(() => 0.5 - Math.random());
      const sliced = shuffled.slice(0, 4);
      setRandomCoins(sliced);
    };
    fetchCoins();
  }, []);

  const addHandler = (coin) => {
    addToPortfolioHandler(coin);
  };

  if (coin.length === 0) {
    return (
      <Box className={classes.skeletonBox}>
        <Skeleton
          variant="rectangular"
          borderradius="5px"
          animation="wave"
          color="white"
          className={classes.skeleton}
          sx={{ bgcolor: "grey.200", height: "100vh" }}
        />
      </Box>
    );
  }

  if (randomCoins.length === 0) {
    return (
      <Box className={classes.skeletonBox}>
        <Skeleton
          variant="rectangular"
          borderradius="5px"
          animation="wave"
          className={classes.skeleton}
          sx={{ bgcolor: "grey.200", height: "100vh" }}
        />
      </Box>
    );
  }

  const name = coin.coin.name;
  const symbol = coin.coin.symbol;
  const price = coin.coin.price.toFixed(2);
  const priceChange = coin.coin.priceChange1d;
  const avalibleSupply = coin.coin.availableSupply.toLocaleString();
  const marketCap = coin.coin.marketCap.toLocaleString();
  const volume = coin.coin.volume.toLocaleString();
  const totalSupply = coin.coin.totalSupply.toLocaleString();
  const coinImage = coin.coin.icon;

  const mainColor = priceChange > 0 ? "#d0f5da" : "#ffebf6";
  const secondColor = priceChange > 0 ? "#309656" : "#d684ad";

  const arrow =
    priceChange > 0 ? (
      <KeyboardArrowUpIcon
        className={classes.icon}
        style={{ backgroundColor: secondColor }}
      />
    ) : (
      <KeyboardArrowDown
        className={classes.icon}
        style={{ backgroundColor: secondColor }}
      />
    );

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Box className={classes.priceBox}>
          <Box className={classes.box}>
            <img
              alt={name}
              style={{ height: 30, width: 30, marginRight: 8 }}
              src={coinImage}
            />
            <h1 className={classes.title}>${price}</h1>
            <Typography
              style={{ backgroundColor: mainColor, color: secondColor }}
              className={classes.priceChange}
            >
              {priceChange}%
            </Typography>

            {arrow}
          </Box>
          <Box>
            <Typography>
              {name} USD ({symbol} - USD)
            </Typography>
          </Box>
        </Box>
        <Box>
          <Chart/>
         {/*  <img src={Chart} style={{ width: "100%" }} alt="chart" /> */}
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => addHandler(coin)}>Add to portfolio</Button>
        </Box>
        <MoreInfo
          avalibleSupply={avalibleSupply}
          marketCap={marketCap}
          volume={volume}
          totalSupply={totalSupply}
        />
        <RandomCoins randomCoins={randomCoins} />
      </Card>
    </div>
  );
};

export default CoinPage;

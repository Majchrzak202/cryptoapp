import React, { useEffect, useState } from "react";
import { Card, Grid, Box, Typography, Button } from "@material-ui/core";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowDown } from "@mui/icons-material";
import Chart from "./../../../assets/Chart.png";
import NewCoinCard from "../coin-card/NewCoinCard";
import { useParams } from "react-router";
import { Skeleton } from "@mui/material";
import { usePortfolio } from "../../../context/PortfolioContextProvider";
import useStyles from "./Styles";

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
      console.log(data);
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

  if (randomCoins.length === 0) {
    return (
      <Box className={classes.skeletonBox}>
        <Skeleton
          variant="rectangular"
          borderradius="5px"
          animation="wave"
          className={classes.skeleton}
        />
      </Box>
    );
  }

  if (coin.length === 0) {
    return (
      <Box className={classes.skeletonBox}>
        <Skeleton
          variant="rectangular"
          borderradius="5px"
          animation="wave"
          className={classes.skeleton}
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
  const website = coin.coin.websiteUrl;

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
            <Typography style={{ fontSize: "40px", fontFamily: "Roboto" }}>
              ${price}
            </Typography>
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
          <img src={Chart} style={{ width: "100%" }} alt="chart" />
        </Box>
        <Button onClick={() => addHandler(coin)}>Add to portfolio</Button>
        <Box className={classes.moreInfoBox}>
          <Grid spacing={3} container>
            <Grid xs={12} sm={12} md={3} lg={3} item>
              <Box className={classes.moreInfoItem}>
                <Typography
                  className={classes.typo}
                  style={{ fontSize: "12px" }}
                  align="left"
                >
                  Total Supply:
                </Typography>
                <Typography className={classes.typo} align="center">
                  {totalSupply}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} item>
              <Box className={classes.moreInfoItem}>
                <Typography
                  className={classes.typo}
                  style={{ fontSize: "12px" }}
                  align="left"
                >
                  Circulating Supply:
                </Typography>
                <Typography className={classes.typo} align="center">
                  {avalibleSupply}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} item>
              <Box className={classes.moreInfoItem}>
                <Typography
                  className={classes.typo}
                  style={{ fontSize: "12px" }}
                  align="left"
                >
                  Market Cap:
                </Typography>
                <Typography className={classes.typo} align="center">
                  ${marketCap}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} item>
              <Box className={classes.moreInfoItem}>
                <Typography
                  className={classes.typo}
                  style={{ fontSize: "12px" }}
                  align="left"
                >
                  Volume:
                </Typography>
                <Typography className={classes.typo} align="center">
                  ${volume}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.randomCoinBox}>
          <Box style={{ width: "66%" }}>
            <Grid spacing={2} container>
              {randomCoins.map((element, index) => (
                <Grid key={index} xs={12} sm={12} md={6} xl={6} item>
                  <NewCoinCard id={element} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className={classes.newsBox}>Twitter Feed</Box>
        </Box>
      </Card>
    </div>
  );
};

export default CoinPage;

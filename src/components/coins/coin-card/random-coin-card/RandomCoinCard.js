import React, { useEffect, useState } from "react";
import { Card, Typography, Box } from "@material-ui/core";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Styles";

const RandomCoinCard = ({ id }) => {
  const [coin, setCoin] = useState();
  const classes = useStyles();

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

  if (typeof coin === "undefined") {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <Skeleton
          variant="rectangular"
          borderradius="5px"
          animation="wave"
          sx={{ width: 700, height: 500 }}
          style={{ marginTop: "50px" }}
        />
      </Box>
    );
  }

  const name = coin.coin.name;
  const symbol = coin.coin.symbol;
  const price = coin.coin.price.toFixed(2);
  const priceChange = coin.coin.priceChange1d;
  const coinImage = coin.coin.icon;

  const mainColor = priceChange > 0 ? "#effcf1" : "#ffebf6";
  const secondColor = priceChange > 0 ? "#d0f5da" : "#ffd2e8";

  const arrow =
    priceChange > 0 ? (
      <NorthEastIcon
        style={{
          backgroundColor: secondColor,
          marginLeft: 5,
          fontSize: 12,
          borderRadius: 100,
        }}
      />
    ) : (
      <SouthEastIcon
        style={{
          backgroundColor: secondColor,
          marginLeft: 5,
          fontSize: 12,
          borderRadius: 100,
        }}
      />
    );

  return (
    <Link style={{ textDecoration: "none" }} to={`/coinpage/${id}`}>
      <Card className={classes.card} style={{ backgroundColor: mainColor }}>
        <Box className={classes.box}>
          <img
            src={coinImage}
            alt={name}
            style={{backgroundColor: secondColor}}
            className={classes.img}
          />

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{ fontSize: 15, fontWeight: 800, marginLeft: 10 }}
            >
              {symbol}-USD
            </Typography>
            <Typography
              style={{ fontSize: 12, marginLeft: 10, color: "#8c9592" }}
            >
              {name} USD
            </Typography>
          </Box>
        </Box>
        <Box style={{ paddingTop: 35 }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                backgroundColor: secondColor,
                fontSize: 12,
                borderRadius: 10,
                width: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {priceChange}%
            </Typography>
            {arrow}
          </Box>
          <Typography style={{ fontSize: 30, fontFamily: "Roboto" }}>
            ${price}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default RandomCoinCard;

import React, { useEffect, useState } from "react";
import { Grid, Card, Typography, Button, Link, Box } from "@material-ui/core";
import useStyles from "./Styles";
import { useParams } from "react-router";
import StarBorder from "@mui/icons-material/StarBorder";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { usePortfolio } from "../../../context/PortfolioContextProvider";
import { Skeleton } from "@mui/material";

const CoinPage = () => {
  const [coin, setCoin] = useState("");
  const classes = useStyles();
  const { id } = useParams();
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

  const addHandler = (coin) => {
    addToPortfolioHandler(coin);
  };

  if (coin.length === 0) {
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
          borderRadius="5px"
          animation="wave"
          sx={{ width: 700, height: 500 }}
        />
      </Box>
    );
  }

  const name = coin.coin.name;
  const symbol = coin.coin.symbol;
  const price = coin.coin.price.toFixed(2);
  const priceChange = coin.coin.priceChange1d;
  const avalibleSupply = coin.coin.availableSupply.toFixed(2);
  const marketCap = coin.coin.marketCap.toFixed(2);
  const volume = coin.coin.volume.toFixed(2);
  const totalSupply = coin.coin.totalSupply.toFixed(2);
  const coinImage = coin.coin.icon;
  const website = coin.coin.websiteUrl;

  let priceChangeDisplay;

  if (priceChange > 0) {
    priceChangeDisplay = (
      <Typography className={classes.priceChangePlus}>
        <ArrowDropUp />
        {priceChange}%
      </Typography>
    );
  } else if (priceChange < 0) {
    priceChangeDisplay = (
      <Typography className={classes.priceChangeMinus}>
        <ArrowDropDown />
        {priceChange}%
      </Typography>
    );
  }

  return (
    <div className={classes.coinpage}>
      <Card  sx={{ width: 700}} className={classes.card}>
        <Grid container spacing={0}>
          <Grid className={classes.firstgrid} item xs={6} sm={6}>
            <img
              style={{ width: "30px", marginRight: "5px" }}
              src={coinImage}
              alt={name}
            />
            <Typography style={{ marginRight: "10px" }} variant="h6">
              {name}
            </Typography>

            <Typography
              style={{
                borderRadius: "4px",
                backgroundColor: "#F0F0F0	",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              variant="h6"
            >
              {symbol}
            </Typography>
            <Button onClick={() => addHandler(coin)} className={classes.button}>
              <StarBorder />
            </Button>
          </Grid>
          <Grid
            className={classes.secondgrid}
            sx={{ xs: "none" }}
            item
            xs={6}
            sm={6}
          >
            <Typography>
              {name} price ({symbol})
            </Typography>
            <Typography variant="h6">{price} $</Typography>
            {priceChangeDisplay}
          </Grid>
          <Grid className={classes.thirdGrid} item xs={6} sm={6}>
            <Typography className={classes.siteLink}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={website}
              >
                {name} website
              </Link>
            </Typography>
          </Grid>
          <Grid className={classes.secondgrid} item xs={6} sm={6}>
            <Typography> </Typography>
            <Typography variant="h6"></Typography>
          </Grid>
        </Grid>

        <Grid className={classes.detailsgrid} container spacing={3}>
          <Grid xs={12} sm={6} md={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Market Cap
              </Typography>
              <Typography> $ {marketCap}</Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>Volume</Typography>
              <Typography> $ {volume}</Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Total Supply
              </Typography>
              <Typography> {totalSupply} </Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Avalible Supply
              </Typography>
              <Typography> {avalibleSupply}</Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default CoinPage;

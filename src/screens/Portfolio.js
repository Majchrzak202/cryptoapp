import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@mui/material";
import CoinCard from "../components/coins/CoinCard";

const DUMMY_PORTFOLIO = [
  {
    name: "Bitcoin",
    price: 24000,
    description: "BTC is a King of Crypto",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023",
  },
  {
    name: "Ethereum",
    price: 1902,
    description: "ETH is a ultra sound money",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023",
  },
  {
    name: "Binance Coin",
    price: 349,
    description: "BNB is a wet CZ dream",
    image: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023",
  },
];

const useStyles = makeStyles({
  portfolio: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  console.log(DUMMY_PORTFOLIO[0].name);

  return (
    <div className={classes.portfolio}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h4' textAlign='center'>This is youre Portfolio fren</Typography>
        <Grid sx={{marginTop: '15px'}} container spacing={2} height="100%">
          {DUMMY_PORTFOLIO.map((coin) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={coin.name}
              height="100%"
              item
            >
              <CoinCard
                name={coin.name}
                price={coin.price}
                image={coin.image}
                description={coin.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Portfolio;

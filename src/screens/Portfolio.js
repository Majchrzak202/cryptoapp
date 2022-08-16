import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import CoinCard from "../components/coins/CoinCard";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
  },
  portfolio: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.portfolio}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          justifyContent="center"
          alignItems="stretch"
          container
          spacing={3}
        >
          <Grid justify="center" alignItems="center" item>
            {/* <CoinCard
              name="Bitcoin"
              price="24001$"
              image="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023"
              description="ETH is a ultra sound money"
            /> */}
            K
          </Grid>

          <Grid justify="center" alignItems="center" item>
            {/* <CoinCard
              name="Ehtereum"
              price="1901$"
              image="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023"
              description="Bitcoin is a king of Crypto"
            /> */}
            F
          </Grid>

          <Grid item>
            {/* <CoinCard
              name="Binance Coin"
              price="402$"
              image="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023"
              description="BNB is a wet CZ dream"
            /> */}
            C
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Portfolio;

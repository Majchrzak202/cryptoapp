import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@mui/material";
import CoinCard from "../components/coins/coin-card/CoinCard";
import { Link } from "react-router-dom";
import {Skeleton} from "@mui/material";


const useStyles = makeStyles({
  portfolio: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
});

const Portfolio = () => {
  const [coins, setCoins] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchCoinsFromDatabase();
  }, []);

  const fetchCoinsFromDatabase = async () => {
    const response = await fetch(
      "https://cryptocurrency-project-b4951-default-rtdb.firebaseio.com/crypto.json"
    );
    const data = await response.json();
    const loadedCoins = [];

    for (const key in data) {
      loadedCoins.push({
        name: data[key].name,
        id: data[key].id,
        price: data[key].price,
        icon: data[key].icon,
      });
    }
    setCoins(loadedCoins);
  };

  if (coins.length === 0) {
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
          sx={{ width: 1100, height: 500 }}
        />
      </Box>
    );
  }

  return (
    <div className={classes.portfolio}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" textAlign="center">
          This is youre Portfolio fren
        </Typography>
        <Grid sx={{ marginTop: "15px" }} container spacing={1} height="100%">
          {coins.map((coin) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={coin.name}
              height="100%"
              item
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`/coinpage/${coin.id}`}
              >
                <CoinCard
                  name={coin.name}
                  price={coin.price}
                  icon={coin.icon}
                  description={coin.description}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Portfolio;

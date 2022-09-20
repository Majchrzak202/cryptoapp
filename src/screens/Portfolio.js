import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@mui/material";
import CoinCard from "../components/coins/coin-card/CoinCard";
import { Skeleton } from "@mui/material";
import { getDatabase, ref, remove } from "firebase/database";
import { useAuth } from "../context/UserAuthContextProvider";

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
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const {user} = useAuth()

  useEffect(() => {
    fetchCoinsFromDatabase();
  }, []);

   if (user === null) {
    return null
  } 

  const fetchCoinsFromDatabase = async () => {
    setLoading(true);
    const response = await fetch(
      `https://cryptocurrency-project-b4951-default-rtdb.firebaseio.com/${user.uid}.json`
    );
    const data = await response.json();
    const loadedCoins = [];

    for (const key in data) {
      loadedCoins.push({
        name: data[key].name,
        id: data[key].id,
        price: data[key].price,
        icon: data[key].icon,
        priceChangeHour: data[key].priceChange1h,
        priceChangeDay: data[key].priceChange1d,
        priceChangeWeek: data[key].priceChange1w,
      });
    }
    setCoins(loadedCoins);
    /* console.log(loadedCoins); */
    setLoading(false);
  };

  const removeHandler = async (coinName) => {
    const db = getDatabase();
    const data = await remove(ref(db, `${user.uid}/` + coinName))
    console.log(db);
    fetchCoinsFromDatabase()
  };

  if (loading) {
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
          sx={{ width: 1100, height: 500 }}
        />
      </Box>
    );
  }

  return (
    <div className={classes.portfolio}>
      {coins ? (
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
                <CoinCard
                  id={coin.id}
                  name={coin.name}
                  price={coin.price}
                  icon={coin.icon}
                  description={coin.description}
                  priceChangeHour={coin.priceChangeHour}
                  priceChangeDay={coin.priceChangeDay}
                  priceChangeWeek={coin.priceChangeWeek}
                  removeHandler={removeHandler}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          No coins, please add some!
        </Box>
      )}
    </div>
  );
};

export default Portfolio;

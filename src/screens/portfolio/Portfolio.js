import React, { useState, useEffect } from "react";
import useStyles from "./Styles";
import { Grid, Box, Typography } from "@mui/material";
import CoinCard from "../../components/coins/coin-card/coin-card/CoinCard";
import { getDatabase, ref, remove } from "firebase/database";
import { useAuth } from "../../context/UserAuthContextProvider";
import { Skeleton } from "@mui/material";

const Portfolio = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { user } = useAuth();

  useEffect(() => {
    fetchCoinsFromDatabase();
  }, []);

  if (user === null) {
    return null;
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
    setLoading(false);
  };

  const removeHandler = async (coinName) => {
    const db = getDatabase();
    const data = await remove(ref(db, `${user.uid}/` + coinName));
    console.log(db);
    fetchCoinsFromDatabase();
  };

  return (
    <div className={classes.portfolio}>
      <Box className={classes.main}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            textAlign="center"
            style={{ color: "#ddefff" }}
          >
            This is youre Portfolio fren
          </Typography>
          <Grid sx={{ marginTop: "15px" }} container spacing={1} height="100%">
            {coins.map((coin) => (
              <Grid
                style={{ display: "flex", justifyContent: "center" }}
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                key={coin.name}
                item
              >
                {!loading ? (
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
                ) : (
                  <Skeleton
                    style={{ display: "flex", width: "80vw", height: "70vh" }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Portfolio;

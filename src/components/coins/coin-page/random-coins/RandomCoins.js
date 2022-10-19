import React from "react";
import useStyles from "./Styles";
import { Box, Grid, Typography } from "@material-ui/core";
import RandomCoinCard from "../../coin-card/random-coin-card/RandomCoinCard";
import NewsFeed from "../news-feed/NewsFeed";

const RandomCoins = ({ randomCoins }) => {
  const classes = useStyles();
  return (
    <Box className={classes.randomCoinBox}>
      <Box className={classes.innerRandomBox}>
        <Typography
        align='center'
          style={{
            fontSize: 25,
            fontWeight: 800,
            
          }}
        >
          Check another hot Coins
        </Typography>
        <Grid spacing={2} container>
          {randomCoins.map((element, index) => (
            <Grid key={index} xs={12} sm={12} md={6} xl={6} item>
              <RandomCoinCard id={element} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <NewsFeed />
    </Box>
  );
};

export default RandomCoins;

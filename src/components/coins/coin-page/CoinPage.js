import React, { useEffect, useState } from "react";
import { Grid, Card, Typography, Button, Link } from "@material-ui/core";
import useStyles from "./Styles";
import { useParams } from "react-router";

import StarBorder from "@mui/icons-material/StarBorder";

const CoinPage = () => {
  const [coin, setCoin] = useState('');
  const classes = useStyles();
  const { id } = useParams();

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

  console.log(coin)

  if (coin.length === 0) {
    return null;
  }

  console.log(coin);

  const name = coin.coin.name;
  const symbol = coin.coin.symbol;
  const price = coin.coin.price.toFixed(2);
  const priceChange = coin.coin.priceChange1d;
  const avalibleSupply = coin.coin.availableSupply.toFixed(2);
  const marketCap = coin.coin.marketCap.toFixed(2);
  const volume = coin.coin.volume.toFixed(2);
  const totalSupply = coin.coin.totalSupply.toFixed(2);

  return (
    <div className={classes.coinpage}>
      <Card className={classes.card}>
        <Grid container spacing={0}>
          <Grid className={classes.firstgrid} item xs={6} sm={6}>
            <Typography style={{ marginRight: "10px" }} variant="h6">
              {name}
            </Typography>

            <Typography variant="h6">{symbol}</Typography>
            <Button className={classes.button}>
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
          </Grid>
          <Grid /* className={classes.firstgrid} */ item xs={6} sm={6}>
            <Typography>
              <Link href="https://blockchair.com/bitcoin/">Explorer</Link>
            </Typography>
            <Typography variant="h6">{price} $</Typography>
          </Grid>
          <Grid /* className={classes.secondgrid} */ item xs={6} sm={6}>
            <Typography>{priceChange}</Typography>
            <Typography variant="h6"></Typography>
          </Grid>
        </Grid>

        <Grid className={classes.detailsgrid} container spacing={3}>
          <Grid xs={12} sm={6} md={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Market Cap{" "}
              </Typography>
              <Typography> {marketCap}</Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>Volume</Typography>
              <Typography>{volume}</Typography>
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

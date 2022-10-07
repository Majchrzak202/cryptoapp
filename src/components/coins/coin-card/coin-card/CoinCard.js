import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import useStyles from "./Styles";
import { ArrowDropUp } from "@mui/icons-material";
import { ArrowDropDown } from "@mui/icons-material";
import { useTheme } from "../../../../context/ThemeContext";
import { Link } from "react-router-dom";

const CoinCard = ({
  id,
  price,
  name,
  icon,
  priceChangeHour,
  priceChangeDay,
  priceChangeWeek,
  removeHandler,
}) => {
  const classes = useStyles();
  const { theme } = useTheme();

  const hourSignal =
    priceChangeHour > 0 ? (
      <ArrowDropUp style={{ color: "green" }} />
    ) : (
      <ArrowDropDown style={{ color: "red" }} />
    );
  const dailySignal =
    priceChangeDay > 0 ? (
      <ArrowDropUp style={{ color: "green" }} />
    ) : (
      <ArrowDropDown style={{ color: "red" }} />
    );
  const weeklySignal =
    priceChangeWeek > 0 ? (
      <ArrowDropUp style={{ color: "green" }} />
    ) : (
      <ArrowDropDown style={{ color: "red" }} />
    );

  return (
    <div className={classes.main}>
      <Card id={theme} className={classes.root}>
        <Box className={classes.container}>
          <Box className={classes.box}>
            <Button onClick={() => removeHandler(name)}>Remove</Button>
          </Box>
          <Link to={`/coinpage/${id}`}>
            <CardMedia className={classes.img} image={icon}></CardMedia>
          </Link>
          <CardContent className={classes.cardContent}>
            <Typography style={{ color: "black" }}>{name}</Typography>
            <Typography style={{ color: "black" }}>
              {price.toFixed(2)} $
            </Typography>
            <Typography style={{ color: "black" }}>Price change</Typography>
            <Grid spacing={1} container>
              <Grid className={classes.gridItem} item>
                <Typography style={{ fontSize: 10, color: "black" }}>
                  1Hour
                </Typography>
                <Typography style={{ fontSize: 10 }} className={classes.signal}>
                  {hourSignal}
                  {priceChangeHour}
                </Typography>
              </Grid>
              <Grid className={classes.gridItem} item>
                <Typography style={{ fontSize: 10, color: "black" }}>
                  1Day
                </Typography>
                <Typography style={{ fontSize: 10 }} className={classes.signal}>
                  {dailySignal}
                  {priceChangeDay}
                </Typography>
              </Grid>
              <Grid className={classes.gridItem} item>
                <Typography style={{ fontSize: 10, color: "black" }}>
                  1Week
                </Typography>
                <Typography style={{ fontSize: 10 }} className={classes.signal}>
                  {weeklySignal}
                  {priceChangeWeek}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CoinCard;

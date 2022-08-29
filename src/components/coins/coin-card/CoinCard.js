import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import useStyles from "./Styles";

const CoinCard = ({ price, name, icon }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.img} image={icon}></CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography>{name}</Typography>
        <Typography>{price.toFixed(2)} $</Typography>
      </CardContent>
    </Card>
  );
};

export default CoinCard;

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    margin: "auto",
    width: " 100px",
    height: "100px",
    marginTop: '30px'
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20x",
  },
  root: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: 'auto'
  },
  img: {
    width: "20%",
    height: "20%",
  },
});
const CoinCard = ({ price, name, description, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image}></CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography>
          <h2>{name}</h2>
          <p>{price} $</p>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoinCard;

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
});
const CoinCard = (price, name, description, image) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <img style={{ width: "50px", height: "50px" }} src={image} />
      </CardMedia>
      <CardContent className={classes.cardContent} justify>
        <Typography>
          {name}
          {price}
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoinCard;

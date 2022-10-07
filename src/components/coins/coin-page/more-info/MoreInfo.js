import React from "react";
import useStyles from "./Styles";
import { Grid, Box, Typography } from "@material-ui/core";

const MoreInfo = ({ totalSupply, marketCap, volume, avalibleSupply }) => {
  const classes = useStyles();
  return (
    <Box className={classes.moreInfoBox}>
      <Grid spacing={1} container>
        <Grid xs={12} sm={12} md={3} lg={3} item>
          <Box className={classes.moreInfoItem}>
            <Typography
              className={classes.typo}
              style={{ fontSize: "12px" }}
              align="left"
            >
              Total Supply:
            </Typography>
            <Typography className={classes.typo} align="center">
              {totalSupply}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3} item>
          <Box className={classes.moreInfoItem}>
            <Typography
              className={classes.typo}
              style={{ fontSize: "12px" }}
              align="left"
            >
              Circulating Supply:
            </Typography>
            <Typography className={classes.typo} align="center">
              {avalibleSupply}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3} item>
          <Box className={classes.moreInfoItem}>
            <Typography
              className={classes.typo}
              style={{ fontSize: "12px" }}
              align="left"
            >
              Market Cap:
            </Typography>
            <Typography className={classes.typo} align="center">
              ${marketCap}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3} item>
          <Box className={classes.moreInfoItem}>
            <Typography
              className={classes.typo}
              style={{ fontSize: "12px" }}
              align="left"
            >
              Volume:
            </Typography>
            <Typography className={classes.typo} align="center">
              ${volume}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoreInfo;

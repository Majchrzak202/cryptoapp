import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CoinTable from "./CoinTable";
import Searchbar from "../searchbar/Searchbar";

const useStyles = makeStyles({
  coinpage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CoinList = () => {
  const classes = useStyles();
  return (
    <section className={classes.coinpage}>
      <Box>
        <Searchbar />
      </Box>
      <Card>
        <CoinTable />
      </Card>
    </section>
  );
};

export default CoinList;

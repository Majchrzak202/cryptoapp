import React, { useState } from "react";
import { Card, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CoinTable from "./CoinTable";
import Searchbar from "../searchbar/Searchbar";
import CoinTableMobile from "./CoinTableMobile";
import useWindowSize from "../hooks/useWindowSize";

const useStyles = makeStyles((theme) => ({
  coinpage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    marginTop: 15,
    paddingTop: 20,
    [theme.breakpoints.down("xs")]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up(1500)]: {
      justifyContent: 'flex-start',
      marginTop: 5
    },
  },
}));

const CoinList = ({ coins }) => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const size = useWindowSize();

  return (
    <section className={classes.coinpage}>
      <Box>
        <Searchbar setSearch={setSearch} />
      </Box>
      <Card>
        {size.width < 700 && <CoinTableMobile coins={coins} search={search} />}
        {size.width > 700 && <CoinTable coins={coins} search={search} />}
      </Card>
    </section>
  );
};

export default CoinList;

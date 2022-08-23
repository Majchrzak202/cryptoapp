import React, { useState } from "react";
import { Card, Box} from "@mui/material";
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

const CoinList = ({coins}) => {
  const [search, setSearch] = useState('');
  const classes = useStyles();

  console.log(coins)

  return (
    <section className={classes.coinpage}>
      <Box>
        <Searchbar setSearch={setSearch} />
      </Box>
      <Card>
        <CoinTable coins={coins} search={search} />
      </Card>
    </section>
  );
};

export default CoinList;

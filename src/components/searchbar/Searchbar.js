import React from "react";
import { TextField, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputLabel: {
    color: "white",
  },
});

const Searchbar = ({ setSearch }) => {
  const classes = useStyles();
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <TextField
        InputLabelProps={{ style: { color: "white" } }}
        sx={{
          input: { color: "white" },
          formControl: { color: "white" },
        }}
        onChange={(e) => setSearch(e.target.value)}
        id="standard-basic"
        label="Search Coin"
        variant="standard"
      />
    </Box>
  );
};

export default Searchbar;

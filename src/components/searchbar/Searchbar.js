import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <Box sx={{marginBottom: '15px'}}>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        id="standard-basic"
        label="Search Coin"
        variant="standard"
      />
    </Box>
  );
};

export default Searchbar;

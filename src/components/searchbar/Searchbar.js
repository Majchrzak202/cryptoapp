import React from "react";
import { TextField, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputLabel: {
    color: "white",
  },
});

const StyledTextField = styled(TextField)({
  "& label": {
    color: "rgba(180, 206, 241, 255)",
  },
  "&:hover label": {
    fontWeight: 700,
  },
  "& label.Mui-focused": {
    color: "rgba(180, 206, 241, 255)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(180, 206, 241, 255)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(180, 206, 241, 255)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(180, 206, 241, 255)",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(180, 206, 241, 255)",
    },
  },
});

const Searchbar = ({ setSearch }) => {
  const classes = useStyles();
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <StyledTextField
        sx={{
          input: { color: "white" },
        }}
        onChange={(e) => setSearch(e.target.value)}
        id="standard-basic"
        label="Search Coin"
        variant="outlined"
      />
    </Box>
  );
};

export default Searchbar;

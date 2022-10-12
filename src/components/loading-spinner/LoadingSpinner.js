import React from "react";
import { CircularProgress } from "@mui/material";
import {Box} from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignitems: "center",
        backgroundColor: 'rgba(16, 20, 28, 255)'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;

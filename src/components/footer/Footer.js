import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  return (
    <div className={classes.root}>
      <Box id={theme} className={classes.main}>
        <Typography>Copryright 2022</Typography>
      </Box>
    </div>
  );
};

export default Footer;

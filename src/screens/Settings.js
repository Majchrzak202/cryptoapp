import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, Box, Switch, Button } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const useStyles = makeStyles({
  settings: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    "& #Light": {
      backgroundColor: "white",
      color: "black",
    },
    "& #Dark": {
      backgroundColor: "rgba(42,52,65,255)",
      color: "white",
    },
  },
  card: {
    minWidth: "80vw",
    minHeight: "80vh",
  },
});
const Settings = () => {
  const classes = useStyles();
  const { toggleTheme, theme } = useTheme();
  return (
    <div id={theme} className={classes.settings}>
      <Card id={theme} className={classes.card}>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <Button id={theme}>X</Button>
        </Box>
        <Box style={{ marginLeft: "30px", padding: "30px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontFamily: "Open Sans",
              fontWeight: 800,
            }}
          >
            Settings
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button id={theme} onChange={toggleTheme}>Change Theme</Button>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button id={theme}>Change password</Button>
        </Box>
      </Card>
    </div>
  );
};

export default Settings;

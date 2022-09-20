import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, Box, Switch, Button, Grid } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PasswordIcon from "@mui/icons-material/Password";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../context/UserAuthContextProvider";

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
    minWidth: "40vw",
    minHeight: "auto",
    padding: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  gridItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingsBox: {
    backgroundColor: "rgb(220,220,220)",
    width: "100%",
    padding: "5px",
    borderRadius: "5px",
  },
  settingsGrid: {
    paddingTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingsItemBox: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
});
const Settings = () => {
  const classes = useStyles();
  const { toggleTheme, theme } = useTheme();
  const { user } = useAuth();

  return (
    <div id={theme} className={classes.settings}>
      <Card id={theme} className={classes.card}>
        <AccountCircleIcon fontSize="large" />
        <Typography style={{ fontSize: "10px", padding: "10px" }}>
          {user.email}
        </Typography>
        <Grid container>
          <Grid
            className={classes.gridItem}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Box className={classes.settingsBox}>
              <Typography
                style={{ fontFamily: "Roboto", color: "rgb(128,128,128)" }}
              >
                Settings
              </Typography>
            </Box>
          </Grid>
          <Grid
            className={classes.settingsGrid}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Box className={classes.settingsItemBox}>
              <DarkModeIcon fontSize="small" />
              <Typography style={{ fontFamily: "Roboto", marginLeft: "3px" }}>
                Dark Mode
              </Typography>
            </Box>
            <Switch onChange={toggleTheme} />
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Box className={classes.settingsItemBox}>
              <PasswordIcon style={{ fill: "black" }} fontSize="small" />
              <Typography style={{ fontFamily: "Roboto", marginLeft: "3px" }}>
                Reset Password
              </Typography>
            </Box>
            <Button>
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
        <Box style={{ paddingTop: "50px" }}>
          <Button>
            Logout
            <LogoutIcon />
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Settings;

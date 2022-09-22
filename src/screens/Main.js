import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TitleVideo from "./../assets/TitleVideo.mp4";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  absoluteText: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 160,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      right: 120,
    },
    [theme.breakpoints.down("xs")]: {
      right: 40,
    },
    [theme.breakpoints.up("xl")]: {
      right: 450,
    },
  },
  text: {
    color: "#ddefff",
    fontFamily: "Roboto",
    fontSize: "100px",
    fontWieght: 800,
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      right: 0,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: '180px'
    },
  },
  secondText: {
    color: "#ddefff",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWieght: 800,
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: '40px'
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ height: "100vh", width: "100vw" }}>
        <video
          style={{
            height: "100vh",
            objectFit: "cover",

            width: " 100vw",
          }}
          src={TitleVideo}
          autoPlay
          loop
          muted
        />
      </div>
      <Box className={classes.absoluteText}>
        <Box>
          <Typography className={classes.text}>Coin Sauce</Typography>
          <Typography className={classes.secondText}>
            Learn more
            <ArrowForwardIosIcon
              style={{ color: 'color: "#ddefff"', fontSize: "15px" }}
            />
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Main;

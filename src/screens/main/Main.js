import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import TitleVideo from "./../../assets/TitleVideo.mp4";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.videoDiv}>
        <video
          className={classes.video}
          src={TitleVideo}
          autoPlay
          loop
          defaultMuted
        />
      </div>
      <Box className={classes.absoluteText}>
        <Box>
          <Typography className={classes.text}>Coin Sauce</Typography>
          <Typography className={classes.secondText}>
            Crypto Tracker App
            <Link
              to="mainMenu"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              <KeyboardArrowDownIcon
                fontSize="large"
                className={classes.arrowIcon}
              />
            </Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Main;

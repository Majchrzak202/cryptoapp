import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import TitleVideo from "./../../assets/TitleVideo.mp4";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const classes = useStyles();
  const { ref, inView } = useInView();
  return (
    <div className={classes.main}>
      <div className={classes.videoDiv}>
        <video className={classes.video} src={TitleVideo} autoPlay loop />
      </div>
      <Box className={classes.absoluteText}>
        <Box ref={ref}>
          <Typography className={classes.text}>Coin Sauce</Typography>
          <Typography className={classes.secondText}>
            Crypto Tracker App
             <motion.div
              initial={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.7,
                duration: 1,
                ease: "easeInOut",
                type: "tween",
              }}
              animate={inView ? { scale: 1.2 } : ""}
            > 
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
             </motion.div> 
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Main;

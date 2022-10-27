import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link as SmoothLink } from "react-scroll";
import useStyles from "./Styles";
/* import cryptoLogo from "./../../assets/cryptoLogo.svg"; */
import { useInView } from "react-intersection-observer";

const glowVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const MainMenu = () => {
  const classes = useStyles();
  const [ref, inView] = useInView();
  return (
    <Box ref={ref} id="mainMenu" className={classes.main}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={inView ? { y: -30, opacity: 1 } : ""}
        style={{maxWidth: '100vw'}}
      >
        <Box className={classes.menuBox}>
          <Typography className={classes.title}>
            Welcome to the Coin Sauce
          </Typography>

          <motion.div
            initial="initial"
            whileHover="hover"
            className={classes.motionMain}
          >
            <Box className={classes.menuItemBox}>
              <motion.div variants={glowVariants}>
                <ArrowRightIcon className={classes.arrow} />
              </motion.div>
              <Link className={classes.menuItemLink} to="/cryptos">
                <Typography className={classes.menuItemTitle}>
                  Search juicy & hot Coins
                </Typography>
              </Link>
            </Box>
          </motion.div>

          <motion.div
            initial="initial"
            whileHover="hover"
            className={classes.motionMain}
          >
            <Box className={classes.menuItemBox}>
              <motion.div variants={glowVariants}>
                <ArrowRightIcon className={classes.arrow} />
              </motion.div>
              <Typography className={classes.menuItemTitle}>
                <Link className={classes.menuItemLink} to="/signup">
                  Create account
                </Link>
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial="initial"
            whileHover="hover"
            className={classes.motionMain}
          >
            <Box className={classes.menuItemBox}>
              <motion.div variants={glowVariants}>
                <ArrowRightIcon className={classes.arrow} />
              </motion.div>
              <Typography className={classes.menuItemTitle}>
                <SmoothLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  About us
                </SmoothLink>
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default MainMenu;

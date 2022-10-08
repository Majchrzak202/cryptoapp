import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link as SmoothLink } from "react-scroll";
import useStyles from "./Styles";

const MainMenu = () => {
  const classes = useStyles();
  return (
    <Box id="mainMenu" className={classes.main}>
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
                Search coins
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
                About Coin Sauce
              </SmoothLink>
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default MainMenu;

import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link as SmoothLink } from "react-scroll";

const glowVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const MainMenu = () => {
  return (
    <Box
      id="mainMenu"
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        paddingTop: 80,
        backgroundColor: "rgba(1,10,21,255)",
      }}
    >
      <Box style={{ width: 1436, padding: 50 }}>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontSize: "35px",
            textAlign: "left",
          }}
        >
          Welcome to the Coin Sauce
        </Typography>

        <motion.div
          initial="initial"
          whileHover="hover"
          style={{ width: "15em", cursor: "pointer" }}
        >
          <Box style={{ display: "flex", alignItems: "center", width: "15em" }}>
            <motion.div variants={glowVariants}>
              <ArrowRightIcon />
            </motion.div>
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(180, 206, 241, 255)",
              }}
              to="/cryptos"
            >
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                Search coins
              </Typography>
            </Link>
          </Box>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hover"
          style={{ width: "15em", cursor: "pointer" }}
        >
          <Box style={{ display: "flex", alignItems: "center", width: "15em" }}>
            <motion.div variants={glowVariants}>
              <ArrowRightIcon />
            </motion.div>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontSize: "20px",
                textAlign: "left",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(180, 206, 241, 255)",
                }}
                to="/signup"
              >
                Create account
              </Link>
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial="initial"
          whileHover="hover"
          style={{ width: "15em", cursor: "pointer" }}
        >
          <Box style={{ display: "flex", alignItems: "center", width: "15em" }}>
            <motion.div variants={glowVariants}>
              <ArrowRightIcon />
            </motion.div>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontSize: "20px",
                textAlign: "left",
              }}
            >
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

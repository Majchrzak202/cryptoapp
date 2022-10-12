import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";
import useStyles from "./Styles";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about} id="about">
      <Box style={{ width: 1536, padding: 50 }}>
        <Typography className={classes.mainTitle}>About coin sauce</Typography>
        <Typography className={classes.subtitle}>
          This is an educational Project made with Love and React!<br></br>
          You can easily see prices of{" "}
          <Link className={classes.link} to="/cryptos">
            top 100 cryptocurrencies
          </Link>
          <br></br>
          Track them and save into portfolio (you have to{" "}
          <Link className={classes.link} to="/signup">
            create account
          </Link>
          )<br></br>
          Feel free to{" "}
          <SmoothLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className={classes.link}
          >
            {" "}
            contact author
          </SmoothLink>
          <br></br>
          All right reserved
        </Typography>
      </Box>
    </div>
  );
};

export default About;

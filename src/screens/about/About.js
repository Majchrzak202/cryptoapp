import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  about: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    paddingTop: 80,
    [theme.breakpoints.up(2400)]: {
      height: "50vh",
    },
  },
  img: {
    width: "290px",
    height: "120px",
    marginRight: 8,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "28px",
  },
  link: {
    color: "#e67b54",
    textDecoration: "none",
    fontWeight: 500,
    cursor: 'pointer'
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about} id="about">
      <Box style={{ width: 1536, padding: 50 }}>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontSize: "35px",
            textAlign: "left",
            paddingBottom: 10,
          }}
        >
          About coin sauce
        </Typography>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontSize: "15px",
            textAlign: "left",
          }}
        >
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

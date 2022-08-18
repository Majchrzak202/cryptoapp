import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cryptoLogo from "./../assets/cryptoLogo.png";

const useStyles = makeStyles({
  about: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: '-50px'
  },
  img: {
    width: "200px",
    height: "200px",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <img className={classes.img} alt="crypto" src={cryptoLogo} />
      <h4>This is an educational Project made with Love and React! </h4>
    </div>
  );
};

export default About;

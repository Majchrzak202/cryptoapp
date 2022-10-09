import React from "react";
import Main from "./main/Main";
import MainMenu from "./main-menu/MainMenu";
import About from "./about/About";
import ContactForm from "./contact/Contact";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginTop: -5
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Main />
      <MainMenu />
      <About />
      <ContactForm />
    </div>
  );
};

export default HomePage;

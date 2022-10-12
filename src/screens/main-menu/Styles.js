import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    display: "flex",
    height: "100vh",
    paddingTop: 80,
    backgroundColor: "rgba(1,10,21,255)",
    [theme.breakpoints.up(1500)]: {
      height: "80vh",
    },
    [theme.breakpoints.up(2400)]: {
      height: "50vh",
    },
    [theme.breakpoints.up(1000)]: {
      justifyContent: "center",
    },
  },
  menuBox: {
    width: 1536,
    padding: 50,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down(400)]: {
      padding: 50,

      justifyContent: "center",
    },
    [theme.breakpoints.up(1000)]: {
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 0,
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 35,
    textAlign: "center",
    [theme.breakpoints.down(500)]: {
      fontSize: 23,
      textAlign: "left",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: 30,
      textAlign: "left",
      marginLeft: 10,
    },
    [theme.breakpoints.down(900)]: {
      textAlign: "left",
    },
    [theme.breakpoints.up(2000)]: {
      fontSize: 60,
    },
  },
  motionMain: {
    width: "15em",
    cursor: "pointer",
    [theme.breakpoints.up(1500)]: {
      width: "20em",
    },
  },
  menuItemBox: {
    display: "flex",
    alignItems: "flex-start",
    width: "15em",
    [theme.breakpoints.up(1500)]: {
      width: "20em",
    },
  },
  menuItemLink: {
    textDecoration: "none",
    color: "rgba(180, 206, 241, 255)",
  },
  menuItemTitle: {
    fontFamily: "Roboto",
    fontSize: 19,
    textAlign: "center",
    [theme.breakpoints.up(1500)]: {
      fontSize: 25,
    },
  },
  arrow: {
    color: "#e67b54",
  },
  img: {
    width: "30%",
    paddingTop: 50,
    [theme.breakpoints.down(400)]: {
      width: "100%",
    },
    [theme.breakpoints.up(1500)]: {
      width: "20%",
    },
  },
}));

export default useStyles;

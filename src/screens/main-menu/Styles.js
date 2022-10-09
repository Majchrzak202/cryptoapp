import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    paddingTop: 80,
    backgroundColor: "rgba(1,10,21,255)",
    [theme.breakpoints.up(2400)]: {
      height: "50vh",
    },
  },
  menuBox: {
    width: 1536,
    padding: 50,
    [theme.breakpoints.down(400)]: {
      padding: 30,
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 35,
    textAlign: "left",
    [theme.breakpoints.down(500)]: {
      fontSize: 23,
    },
    [theme.breakpoints.down(400)]: {
      fontSize: 20,
    },
  },
  motionMain: {
    width: "15em",
    cursor: "pointer",
  },
  menuItemBox: {
    display: "flex",
    alignItems: "center",
    width: "15em",
  },
  menuItemLink: {
    textDecoration: "none",
    color: "rgba(180, 206, 241, 255)",
  },
  menuItemTitle: {
    fontFamily: "Roboto",
    fontSize: "20px",
    textAlign: "left",
  },
  arrow: {
    color: "#e67b54",
  },
}));

export default useStyles;

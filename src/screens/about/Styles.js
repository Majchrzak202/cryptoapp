import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    paddingTop: 80,
    [theme.breakpoints.up(1200)]: {
      alignItems: "flex-start",
      justifyContent: "center",
    },
    [theme.breakpoints.up(1500)]: {
      height: "80vh",
    },
    [theme.breakpoints.up(2000)]: {
      height: "70vh",
    },
    [theme.breakpoints.up(2400)]: {
      height: "50vh",
    },
  },
  mainTitle: {
    fontFamily: "Roboto",
    fontSize: 35,
    textAlign: "center",
    paddingBottom: 10,
    [theme.breakpoints.up(2000)]: {
      fontSize: 60,
    },
    [theme.breakpoints.down(400)]: {
      fontSize: 30,
      textAlign: "left",
    },
  },

  subtitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    textAlign: "center",
    [theme.breakpoints.down(400)]: {
      fontSize: 15,
      textAlign: "left",
    },
  },
  link: {
    color: "#e67b54",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
}));

export default useStyles;

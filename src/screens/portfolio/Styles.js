import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  portfolio: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "flex-start",
    minWidth: "100vw",
    marginTop: 50,
    [theme.breakpoints.down("xs")]: {
      marginTop: -20,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 30,
    },
  },
  main: {
    display: "flex",
    justifyItems: "center",
    alingItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      width: "100%",
    },
    [theme.breakpoints.up(1600)]: {
      width: "95%",
    },
    [theme.breakpoints.up(1700)]: {
      width: "90%",
    },
    [theme.breakpoints.up(2000)]: {
      width: "75%",
    },
    [theme.breakpoints.up(2500)]: {
      width: "65%",
    },
  },
}));

export default useStyles;

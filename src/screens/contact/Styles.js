import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(1,10,21,255)",
    [theme.breakpoints.up(1200)]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  container: {
    marginBottom: 50,
    paddingTop: 30,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "100vh",
    paddingRight: 50,
    width: "auto",
    [theme.breakpoints.up(2400)]: {
      height: "50vh",
    },
    [theme.breakpoints.up(2000)]: {
      minWidth: 1500,
      paddingTop: 100,
      minHeight: "70vh",
    },
    [theme.breakpoints.up(1500)]: {
      minWidth: 1500,
      paddingTop: 100,
      minHeight: "80vh",
    },
    [theme.breakpoints.up(1000)]: {
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down(1500)]: {
      paddingTop: 80,
    },
    [theme.breakpoints.down(1300)]: {
      paddingTop: 100,
      paddingLeft: 50,
    },
    [theme.breakpoints.down(1000)]: {
      paddingTop: 100,
      paddingLeft: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      alignItems: "center",
      marginRight: 25,
    },
  },
  box: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   
  },
  mainTitle: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 800,
    paddingBottom: 20,
    [theme.breakpoints.up(2000)]: {
      fontSize: 60
     },
  },
}));

export default useStyles;

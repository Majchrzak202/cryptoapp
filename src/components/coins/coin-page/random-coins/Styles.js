import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  randomCoinBox: {
    display: "flex",
    flexDirection: "row",
    padding: "40px",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",

      width: "100vw",
      padding: 15,
    },
  },
  innerRandomBox: {
    width: "66%",
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      justifyContent: "center",
      paddingTop: 0
    },
  },
  newsBox: {
    backgroundColor: "#fff6e9",
    width: "33%",
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
    height: 410,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      width: "90%",
      backgroundColor: 'red'
    },
  },
}));

export default useStyles;

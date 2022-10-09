import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    minHeight: "100vh",
    width: "70vw",
    borderRadius: 0,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      padding: 0,
    },
  },
  priceBox: {
    display: "flex",
    padding: "15px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  title: {
    fontSize: 40,
    fontFamily: "Roboto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      marginRight: 5,
    },
  },
  box: { display: "flex", alignItems: "center", justifyContent: "center" },

  priceChange: {
    padding: 5,
    borderRadius: 30,
    fontSize: 10,
    margin: 10,
    marginLeft: 5,
    [theme.breakpoints.down("xs")]: {
      padding: 3,
    },
  },

  icon: {
    fill: "white",
    borderRadius: 99,
    fontSize: 15,
    marginLeft: 5,
  },

  skeletonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  skeleton: {
    display: "flex",
    width: "75vw",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      width: '100vw',
    },
  },
}));

export default useStyles;

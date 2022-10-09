import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    margin: "auto",
    width: " 100px",
    height: "100px",
    marginTop: "30px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20x",
    flexDirection: "column",
  },

  main: {
    "& #Light": {
      backgroundColor: "#dfeeff",
    },
    "& #Dark": {
      backgroundColor: "rgba(42,52,65,255)",
    },
  },
  root: {
    maxWidth: "90%",
    maxHeight: "80%",
    margin: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    "&:hover": {
      backgroundColor: "#DCDCDC",
      transition: "all .2s ease-in",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 10,
  },
  img: {
    width: "50px",
    height: "50px",
    marginTop: "30px",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 9,
    color: "black",
  },
  signal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3px",
    color: "black",
    fontSize: 9,
  },
}));

export default useStyles;

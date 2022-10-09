import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    "& #Light": {
      backgroundColor: "rgba(1,10,21,255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(1,10,21,255)",
    },
  },
  a: {
    color: "red",
    textDecoration: "none",
    textDecorationColor: "rgba(180, 206, 241, 255)",
  },
  link: {
    color: "rgba(180, 206, 241, 255)",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      color: "black",
    },
  },
}));

export default useStyles;

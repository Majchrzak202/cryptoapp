import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    "& #Light": {
      backgroundColor: "rgba(42,52,65,255)      ",
    },
    "& #Dark": {
      backgroundColor: "rgba(27, 31, 36, 255)",
    },
  },
  a: {
    color: "red",
    textDecoration: "none",
    textDecorationColor: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      color: "black",
    },
  },
}));

export default useStyles;

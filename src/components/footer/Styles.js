import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& #Light": {
      backgroundColor: "rgba(1,10,21,255)",
      color: "rgba(180, 206, 241, 255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(1,10,21,255)",
    },
  },
  main: {
    borderTop: "1px solid black",
    boxShadow: "4px 3px 11px -1px rgba(66, 68, 90, 1)",
    heigth: "10vh",
    padding: "20px",
  },
});

export default useStyles;

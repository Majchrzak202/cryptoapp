import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    cursor: "pointer",
    color: "black",
  },
  main: {
    padding: 5,
    backgroundColor: "#F7e2c7",
    borderRadius: 5,
    marginTop: 10,
    width: "95%",
  },
  img: {
    width: "90%",
    height: "auto",
    borderRadius: 6,
  },
});

export default useStyles;

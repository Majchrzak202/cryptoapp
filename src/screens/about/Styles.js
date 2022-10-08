import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    paddingTop: 80,
    [theme.breakpoints.up(2400)]: {
      height: "50vh",
    },
  },
  img: {
    width: "290px",
    height: "120px",
    marginRight: 8,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "28px",
  },
  link: {
    color: "#e67b54",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
}));

export default useStyles;

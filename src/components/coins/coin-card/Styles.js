import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
  root: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#DCDCDC",
    },
  },
  img: {
    width: "50px",
    height: "50px",
    marginTop: "30px",
  },
});

export default useStyles;

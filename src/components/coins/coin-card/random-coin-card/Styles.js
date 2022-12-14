import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    padding: 30,
    borderRadius: 8,
    height: 150,
  },
  box: {
    display: "flex",
    paddingTop: 5,
  },
  img: {
    padding: 10,
    borderRadius: 12,
    fontSize: 25,
    width: 30,
    height: 30,
  },
  secondBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  skeletonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  },
});

export default useStyles;

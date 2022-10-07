import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  moreInfoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  moreInfoItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff6e9",
    borderRadius: 8,
    padding: 10,
    minHeight: '3rem',
  },
  typo: {
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#1a1d1b",
    paddingTop: 8,
  },
});

export default useStyles;

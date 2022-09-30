import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
  },
  card: {
    minHeight: "100vh",
    minWidth: "70vw",
    borderRadius: 0,
    padding: "30px",
    justifyContent: "center",
    alignItems: "center",
  },
  priceBox: {
    display: "flex",
    padding: "15px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: { display: "flex", alignItems: "center", justifyContent: "center" },

  moreInfoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  moreInfoItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff6e9",
    borderRadius: "8px",
    padding: "12px",
    minHeight: "5em",
  },
  priceChange: {
    padding: "5px",
    borderRadius: "30px",
    fontSize: "10px",
    margin: "10px",
  },
  typo: {
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#1a1d1b",
    paddingTop: "20px",
  },
  icon: {
    fill: "white",
    borderRadius: "99%",
    fontSize: "15px",
  },
  randomCoinBox: {
    display: "flex",
    flexDirection: "row",
    padding: "40px",
  },
  newsBox: {
    backgroundColor: "#fff6e9",
    width: "33%",
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
    height: 410,
  },
  skeletonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  },
  skeleton: {
    marginTop: "50px",
    width: 700,
    height: 500,
  },
});

export default useStyles;

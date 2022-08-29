import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  coinpage: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
   
    fontFamily: "roboto",
  },
  card: {
    minHeight: "50vh",
  },
  firstgrid: {
    paddingTop: "20px",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  secondgrid: {
    paddingTop: "20px",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  thirdGrid: {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    borderRadius: "8px",
  },
  detailsgrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "30px",
  },
  secondcard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all .2s ease-in",
    "&:hover": {
      backgroundColor: "#F0F0F0",
    },
  },
  priceChangeMinus: {
    display: "flex",
    width: "auto",
    justifyContent: "center",
    backgroundColor: "#EE4B2B",
    borderRadius: "5px",
    margin: 0,
    padding: "3px",
    paddingRight: "5px",
  },
  priceChangePlus: {
    display: "flex",
    width: "auto",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: "5px",
    margin: 0,
    padding: "3px",
    paddingRight: "5px",
  },
  siteLink: {
    backgroundColor: "#F0F0F0",
    borderRadius: "8px",
    paddingLeft: "5px",
    paddingRight: "5px",
    "&:hover": {
      backgroundColor: "#DCDCDC",
    },
  },
});

export default useStyles;

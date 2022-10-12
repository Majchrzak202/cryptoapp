import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
      height: "100vh",
      width: "100vw",
    },
    videoDiv: {
      height: "100vh",
      width: "100vw",
    },
    video: {
      height: "100vh",
      objectFit: "cover",
      width: " 100vw",
    },
    arrowIcon: {
      color: "#e67b54",
      borderRadius: 99,
      padding: 3,
      backgroundColor: "rgba(180, 206, 241, 255)",
      marginLeft: 5,
      cursor: "pointer",
    },
    absoluteText: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      right: 160,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        right: 120,
      },
      [theme.breakpoints.down("xs")]: {
        right: 10,
      },
      [theme.breakpoints.up(500)]: {
        right: 90,
      },
      [theme.breakpoints.up(700)]: {
        right: 180,
      },
      [theme.breakpoints.up(800)]: {
        right: 250,
      },
      [theme.breakpoints.up(900)]: {
        right: 280,
      },
      [theme.breakpoints.up(950)]: {
        right: 200,
      },
      [theme.breakpoints.up(1000)]: {
        right: 220,
      },
      [theme.breakpoints.up(1100)]: {
        right: 250,
      },
      [theme.breakpoints.up(1300)]: {
        right: 380,
      },
      [theme.breakpoints.up(1400)]: {
        right: 400,
      },
      [theme.breakpoints.up(1450)]: {
        right: 430,
      },
      [theme.breakpoints.up(1500)]: {
        right: 460,
      },
      [theme.breakpoints.up(1700)]: {
        right: 480,
      },
      [theme.breakpoints.up(1800)]: {
        right: 490,
      },
      [theme.breakpoints.up(1900)]: {
        right: 300,
      },
      
    },
    text: {
      color: "rgba(180, 206, 241, 255)",
      fontFamily: "Roboto",
      fontSize: "100px",
      fontWieght: 800,
      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        right: 0,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "180px",
      },
    },
    secondText: {
      color: "rgba(180, 206, 241, 255)",
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWieght: 800,
      marginLeft: "20px",
      display: "flex",
      alignItems: "flex-start",
  
      [theme.breakpoints.up("xl")]: {
        fontSize: "40px",
      },
    },
  }));

  export default useStyles;
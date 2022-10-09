import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  newsBox: {
    backgroundColor: "#fff6e9",
    width: "33%",
    marginLeft: 10,
    padding: 12,
    borderRadius: 8,
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "85vw",
      padding: 10,
      marginTop: 15,
      marginLeft: 0,
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column'
    },
  },
}));

export default useStyles;

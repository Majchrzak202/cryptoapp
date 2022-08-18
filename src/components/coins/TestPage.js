import React from "react";
import { Grid, Card, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarBorder from "@mui/icons-material/StarBorder";

const useStyles = makeStyles({
  test: {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "50px",
  },
  card: {
    minHeight: "50%",
    minWidth: "100%",
  },
  firstgrid: {
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  secondgrid: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
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
      backgroundColor: "green",
    },
  },
});

const TestPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <Card className={classes.card}>
        <Grid container spacing={0}>
          <Grid className={classes.firstgrid} item xs={6}>
            <Typography style={{ marginRight: "10px" }} variant="h6">
              Ethereum
            </Typography>

            <Typography variant="h6">ETH</Typography>
            <Button className={classes.button}>
              <StarBorder />
            </Button>
          </Grid>
          <Grid className={classes.secondgrid} item xs={6}>
            <Typography variant="p">Ethereum price (ETH)</Typography>
            <Typography variant="h6">1902 $</Typography>
          </Grid>
        </Grid>

        <Grid className={classes.detailsgrid} container spacing={3}>
          <Grid xs={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Market Cap{" "}
              </Typography>
              <Typography> 2 900 128 918 </Typography>
            </Card>
          </Grid>
          <Grid justifyContent="center" xs={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Market Cap{" "}
              </Typography>
              <Typography> 2 900 128 918 </Typography>
            </Card>
          </Grid>
          <Grid justifyContent="center" xs={4} item>
            <Card className={classes.secondcard}>
              <Typography style={{ marginBottom: "10px" }}>
                Market Cap{" "}
              </Typography>
              <Typography> 2 900 128 918 </Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TestPage;

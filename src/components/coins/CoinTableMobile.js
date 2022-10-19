import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({
  table: {
    maxWidth: "100vw",
    padding: 0,
    "& #Light": {
      backgroundColor: "rgba(222,237,255,255)",
      color: "rgba(33,34,47,255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(42,52,65,255)",
      color: "white",
    },
  },
});

function createData(number, name, price, link) {
  return { number, name, price, link };
}

const CoinTableMobile = ({ search, coins }) => {
  const classes = useStyles();
  const { theme } = useTheme();
  if (coins.length === 0) {
    return (
      <Box sx={{ display: "flex" }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: 600, height: "100vh" }}
        />
      </Box>
    );
  }

  const awesomeRows = coins.coins.map((coin) =>
    createData(
      coin.rank,
      coin.name,
      coin.price.toFixed(2),
      <Link
        style={{ textDecoration: "none" }}
        id={theme}
        to={`/coinpage/${coin.id}`}
      >
        <KeyboardArrowRightIcon
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "99%",
          }}
        />
      </Link>
    )
  );

  return (
    <div style={{ backgroundCOlor: "black" }}>
      <TableContainer className={classes.table} component={Paper}>
        <Table id={theme} sx={{ width: "99vw" }} aria-label="simple table">
          <TableHead id={theme}>
            <TableRow>
              <TableCell id={theme}>#</TableCell>
              <TableCell id={theme}>Name</TableCell>
              <TableCell id={theme} align="right">
                Price&nbsp;($)
              </TableCell>
              <TableCell id={theme}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {awesomeRows
              .filter((row) => {
                return row.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell id={theme} component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell id={theme}>{row.name}</TableCell>
                  <TableCell id={theme} align="right">
                    ${row.price}
                  </TableCell>
                  <TableCell id={theme}>{row.link}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CoinTableMobile;

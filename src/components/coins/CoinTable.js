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

const useStyles = makeStyles({
  table: {
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

function createData(number, image, name, price, marketCap, link) {
  return { number, image, name, price, marketCap, link };
}

const CoinTable = ({ search, coins }) => {
  const classes = useStyles();
  const { theme } = useTheme();
  if (coins.length === 0) {
    return (
      <Box sx={{ display: "flex" }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: 700, height: 500 }}
          style={{ backgroundColor: "#cde3fb" }}
        />
      </Box>
    );
  }
  

  const awesomeRows = coins.coins.map((coin) =>
    createData(
      coin.rank,
      coin.icon,
      coin.name,
      coin.price.toFixed(2),
      coin.marketCap.toLocaleString(),
      <Link
        style={{
          textDecoration: "none",
          backgroundColor: "#b8d5f6",
          borderRadius: 5,
          padding: 5,
        }}
        id={theme}
        to={`/coinpage/${coin.id}`}
      >
        More
      </Link>
    )
  );

  return (
    <>
      <TableContainer className={classes.table} component={Paper}>
        <Table id={theme} sx={{ width: 700 }} aria-label="simple table">
          <TableHead id={theme}>
            <TableRow>
              <TableCell id={theme}>#</TableCell>
              <TableCell id={theme} align="left"></TableCell>
              <TableCell id={theme} align="left">
                Name
              </TableCell>
              <TableCell id={theme} align="left">
                Price&nbsp;($)
              </TableCell>
              <TableCell id={theme} align="left">
                Market Cap&nbsp;($)
              </TableCell>
              <TableCell id={theme} align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {awesomeRows
              .filter((row) => {
                return row.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell id={theme} component="th" >
                    {row.number}
                  </TableCell>
                  <TableCell  style={{ width: 40}} id={theme} align="left">
                    <img
                     style={{ width: 20, height: 20 }} 
                      src={row.image}
                      alt={row.name}
                    />
                  </TableCell>
                  <TableCell align="left" id={theme}>
                    {row.name}
                  </TableCell>
                  <TableCell id={theme} align="left">
                    ${row.price}
                  </TableCell>
                  <TableCell id={theme} align="left">
                    ${row.marketCap}
                  </TableCell>

                  <TableCell id={theme} align="left">
                    {row.link}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoinTable;

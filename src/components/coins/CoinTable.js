import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton, Box } from "@mui/material";

import { Link } from "react-router-dom";

function createData(number, name, price, marketCap, volume, link) {
  return { number, name, price, marketCap, volume, link };
}

const CoinTable = ({ search, coins }) => {
  if (coins.length === 0) {
    return (
      <Box sx={{ display: "flex" }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: 700, height: 500 }}
        />
      </Box>
    );
  }

  const awesomeRows = coins.coins.map((coin) =>
    createData(
      coin.rank,
      coin.name,
      coin.price.toFixed(2),
      coin.marketCap.toFixed(0),
      coin.volume,
      <Link to={`/coinpage/${coin.id}`}>More</Link>
    )
  );
  console.log(coins)

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Market Cap&nbsp;($)</TableCell>
              <TableCell align="right">Volume&nbsp;($)</TableCell>
              <TableCell align="right"></TableCell>
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
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                  <TableCell align="right">${row.marketCap}</TableCell>
                  <TableCell align="right">${row.volume}</TableCell>
                  <TableCell align="right">{row.link}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoinTable;

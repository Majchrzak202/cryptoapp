import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(number, name, price, marketCap, volume) {
  return { number, name, price, marketCap, volume };
}

const rows = [
  createData('1', "Bitcoin", 25001, 243525251, 34992929),
  createData('2', 'Ethereum', 1903, 232314306660, 18410778283),
  createData('3', 'Tether', 1, 24, 6.0),
  createData('4', 'USDC', 1, 67, 4.3),
  createData('5', 'BNB', 316, 49, 3.9),
];

const CoinTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell >Name</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Market Cap&nbsp;($)</TableCell>
            <TableCell align="right">Volume&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.marketCap}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CoinTable;
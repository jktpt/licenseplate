import * as React from 'react';
import './table.scss'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const {format,zonedTimeToUtc,} = require("date-fns-tz");
  
export const Tables = ({data}) => {
  const moment = require('moment')

  function createData(licensePlate, memberType, timeIn, timeOut, id, price) {
    return {
      licensePlate,
      memberType,
      timeIn,
      timeOut,
      price,
      history: [
        {
          date: formatTime,
          customerId: id,
          amount: price,
        }
      ],
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell/>
          <TableCell component="th" scope="row">
            {row.licensePlate}
          </TableCell>
          <TableCell align="right">{row.memberType}</TableCell>
          <TableCell align="right">{row.timeIn}</TableCell>
          <TableCell align="right">{row.timeOut}</TableCell>
          <TableCell>
              <IconButton
                 aria-label="expand row"
                 size="small"
                 onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Id</TableCell>
                      <TableCell align="right">Total time in</TableCell>
                      <TableCell align="right">Total price (THB)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(row.price * 10)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      memberType: PropTypes.string.isRequired,
      licensePlate: PropTypes.string.isRequired,
      timeIn: PropTypes.string.isRequired,
      timeOut: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
  };
  
  const rows = []

  //console.log('this is data '+ JSON.stringify(data))
  for(var i in data){
    var formatTime = moment(data[i].timein).utc().format('YYYY-MM-DD')
    rows.push(createData(data[i].plate, data[i].membertype, moment(data[i].timein).utc().format('YYYY-MM-DD HH:mm:ss'), moment(data[i].timeout).utc().format('YYYY-MM-DD HH:mm:ss'), data[i].id, data[i].id/2))
  }
 
  return (
      <TableContainer component={Paper} className="table">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            <TableCell />
            <TableCell>License Plate</TableCell>
            <TableCell align="right">Member type</TableCell>
            <TableCell align="right">Time in</TableCell>
            <TableCell align="right">Time out</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} key={row.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from './../../Hooks/Auth/useAuth';
import './MyOrder.css'
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const MyOrder = () => {
    const [orders,setOrders]=useState([]);
    const {user}=useAuth();
    const [id,setId]=useState('')
    useEffect(()=>{
        fetch(`https://floating-lowlands-50520.herokuapp.com/myorders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handlingDeleting=(id)=>{
        const permission =window.confirm(' Are you sure to delete your order')
        if(permission){
            fetch(`https://floating-lowlands-50520.herokuapp.com/myorders/${id}`,
    {      method:"DELETE"  })
    .then(res=>res.json())
    .then(data=> {
        if(data.deletedCount){
            alert(' deleted successfully ');
            const neworder= orders.filter(data=>data._id!== id);
            setOrders(neworder);       }
            }) 
        }
        else {
            
        }
        }

// putting here the neccesary information of the table 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

        return (
        <div>

<h3 className="my-3"> Your orders are here . Please have a look on this .</h3>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>My Name</StyledTableCell>
            <StyledTableCell align="right"> Email</StyledTableCell>
            <StyledTableCell align="right"> Product Name</StyledTableCell>
            <StyledTableCell align="right">Deletation</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right"> {row.carName}</StyledTableCell>
              <StyledTableCell align="right"> <button onClick={()=>handlingDeleting(row._id)}> Delete   </button> </StyledTableCell>
              <StyledTableCell align="right"> <button > {row.status}  </button> </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrder;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const ManageAllOrders = () => {
    const [orders,setOrders]=useState([]);
    const [status,setStatus]=useState(false)
    useEffect(()=>{
        fetch('https://mighty-everglades-10983.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    const handlingstatus=(id)=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`https://mighty-everglades-10983.herokuapp.com/allOrders/${id}`,{
       method:"PUT",
    })
   .then(res=>res.json())
   .then(data=>{
       if(data.modifiedCount){
       setStatus(true);
       fetch('https://mighty-everglades-10983.herokuapp.com/allOrders')
       .then(res=>res.json())
       .then(data=>setOrders(data))
       }
    })   
        }
        else{

        }
  
    };

    const handlingDelete=id=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`https://mighty-everglades-10983.herokuapp.com/allOrders/${id}`,{
       method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount){
      alert(' Yes , deleted successfully ');
      const newdata= orders.filter(data=>data._id!==id);
      setOrders(newdata);
       }
    })   
        }
        else{

        }
    }

    // putting here the mui table elements 
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
          <h3> Here you can manage all of your order. Total Order:  {orders.length} </h3>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Orderer</StyledTableCell>
                  <StyledTableCell align="right"> Customers email</StyledTableCell>
                  <StyledTableCell align="right">Customers Product</StyledTableCell>
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
                    <StyledTableCell align="right"> <button onClick={()=>handlingDelete(row._id)}> Delete   </button> </StyledTableCell>
                    <StyledTableCell align="right"> <button onClick={()=>handlingstatus(row._id)}> {row.status}  </button> </StyledTableCell>
                  
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      
        </div>
    );
};

export default ManageAllOrders;

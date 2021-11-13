import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
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
        fetch('http://localhost:4000/allOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    const handlingstatus=(id)=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`http://localhost:4000/allOrders/${id}`,{
       method:"PUT",
   })
   .then(res=>res.json())
   .then(data=>{
       if(data.modifiedCount){
       setStatus(true)
       }
   })   
        }
        else{

        }
  
    };

    const handlingDelete=id=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`http://localhost:4000/allOrders/${id}`,{
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
          <h3> Here you can manage all of your order {orders.length} </h3>

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
              <StyledTableCell align="right"> <button onClick={()=>handlingstatus(row._id)}> Pending   </button> </StyledTableCell>
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          {/* <div>
          {
              orders.map(data=> <div  className="divorder">
                  <h2>{data.name}</h2>
                  <h4>{data.email}</h4>
                  <h2> {data.carName}</h2>
                  <h3> id :{data._id}</h3>
                 
                  <button onClick={()=>handlingstatus(data._id)}>{data.status} </button>
                  <button onClick={()=>handlingDelete(data._id)}> Delete   </button>
              </div> 
              )
          }
        </div> */}
        </div>
    );
};

export default ManageAllOrders;
// onClick={()=>handlingDeleting(data._id)}
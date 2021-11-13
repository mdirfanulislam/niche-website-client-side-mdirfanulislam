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
const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://floating-lowlands-50520.herokuapp.com/explore')
       .then(res=>res.json())
       .then(data=>setProducts(data))
    },[]);
    const handlingDelete=id=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`https://floating-lowlands-50520.herokuapp.com/admindelete/${id}`,{
       method:"DELETE",
   })
   .then(res=>res.json())
   .then(data=>{
       if(data.deletedCount){
      alert(' Yes , deleted successfully ');
      const newdata= products.filter(data=>data._id!==id);
      setProducts(newdata);
       }
   })   
        }
        else{

        }
    }

    // the table component functions are here 
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
            <h3> Handle your products here. Total products:  {products.length} </h3>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Products Name</StyledTableCell>
            <StyledTableCell align="right">Price </StyledTableCell>
            <StyledTableCell align="right">Deletation</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">$ {row.price}</StyledTableCell>
              <StyledTableCell align="right"> <button onClick={()=>handlingDelete(row._id)}> Delete   </button> </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default ManageProducts;
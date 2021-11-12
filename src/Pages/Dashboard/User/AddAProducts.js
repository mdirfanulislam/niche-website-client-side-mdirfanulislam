import React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
const AddAProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const [newProduct,setNewProduct]=useState(false)
    const onSubmit=data=>{
        const confirm =window.confirm('Are you sure to add a new product ')
        if(confirm){
          fetch('http://localhost:4000/cars',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json)
        .then(data=>{
            if(data.insertedId){
                setNewProduct(true);
                reset()
            }
        })  
        }
        
    }
    return (
        <div>
            <h5> Add a new product here </h5>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}  sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:"10px"}}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <img  className="img-fluid" alt="This is an image " />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className="w-75 mb-2"  placeholder="product name" {...register("name", { required: true })} /> <br />
      <input className="w-75 mb-2"  placeholder="description" {...register("description", { required: true})} /> <br />
      <input className="w-75 mb-2" placeholder="price" {...register("price", { required: true})} /> <br />
      <input className="w-75 mb-2" placeholder="Image Link" {...register("image", { required: true})} /> <br />
      
      <input type="submit" value='submit' />
    </form>

        </Grid>
       
      </Grid>
    </Box>
    {newProduct &&<Alert severity="success"> New product added successfully  </Alert>  }
        </div>
    );
};

export default AddAProducts;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NagigationTopForUnique from './../../Components/Navigation/NagigationTopForUnique';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import svg from '../../images/svgcar.svg'
import { useForm } from "react-hook-form";
import './Purchase.css'
import useAuth from './../Hooks/Auth/useAuth';
const Purchase = () => {
    const {id}=useParams();
    const {user}=useAuth()
    const [car,setCar]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:4000/cars/${id}`)
        .then(res=>res.json())
        .then(data=>setCar(data))
    },[]);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        // console.log(data)
        fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('We have got your order');
                reset()
            }
            else{

            }
        })
    };
    return (
        <div>
            <NagigationTopForUnique></NagigationTopForUnique>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}  sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:"10px"}}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <img src={svg} className="img-fluid" alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className="w-75 mb-2" defaultValue={user.displayName} placeholder="your name" {...register("name", { required: true })} /> <br />
      <input className="w-75 mb-2" defaultValue={user.email} placeholder="Email" {...register("email", { required: true})} /> <br />
      <input className="w-75 mb-2" placeholder="Address" {...register("address", { required: true})} /> <br />
      <input className="w-75 mb-2" placeholder="Phone Number" {...register("phoneNumber", { required: true})} /> <br />
      
      <input type="submit" value='submit' />
    </form>
        </Grid>
       
      </Grid>
    </Box>
             <h2> Your order details  <br /></h2>
             <Box sx={{ flexGrow: 1 }} className="details">
      <Grid container spacing={2}>
        <Grid item  xs={12} sm={12} md={5} lg={5}>
         <img src={car.image} width="90%" alt="" />
        </Grid>
        <Grid item  xs={12} sm={12} md={7} lg={7}>
        <h3> Product Name: {car.name}</h3>
        <h5>Details: {car.description}</h5>
        <h3>Price: ${car.price}</h3>
        </Grid>
       
      </Grid>
    </Box>
        </div>
    );
};

export default Purchase;
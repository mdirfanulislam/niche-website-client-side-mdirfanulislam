import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import NagigationTopForUnique from '../../Components/Navigation/NagigationTopForUnique';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SingleCar from './../Home/SingleCar/SingleCar';
const Explore = () => {
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/cars')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <NagigationTopForUnique></NagigationTopForUnique>
            <h2> Explore our shop online </h2>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
         {cars.map(data=><SingleCar data={data} ></SingleCar>)}
        
        
      </Grid>
    </Box>
            <Footer></Footer>
        </div>
    );
};

export default Explore;
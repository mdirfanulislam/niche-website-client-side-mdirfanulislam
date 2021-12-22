import React, { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navigation from './../../Components/Navigation/Navigation';
import SingleCar from './SingleCar/SingleCar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import HomeExtra from './SingleCar/HomeExtra/HomeExtra';
import Review from './Review/Review';
import { Container } from '@mui/material';
const Home = () => {
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch('https://mighty-everglades-10983.herokuapp.com/cars')
        .then(res=>res.json())
        .then(data=>setCars(data.slice(0,6)))
    },[]);

    const [reviews,setReviews]=useState([])
     useEffect(()=>{
        fetch('https://mighty-everglades-10983.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
        
     },[])
 
    return (
        <div style={{color:"black", backgroundColor:'white' ,overflow:'hidden'}}>
            <Navigation></Navigation>
            <Container><HomeExtra></HomeExtra></Container>
            <h2> Our top rated Cars Choosen by the our customers . </h2>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
         {cars.map(data=><SingleCar data={data} ></SingleCar>)}
        
        
      </Grid>
    </Box>
     {/* here I am gonna put my review system  */}
           <h1 className="my-5 text-info fs-italic"> Please Look what our customer say about us </h1>
     <Container>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2}  >
        
      {
          reviews.map(data=><Review data={data}></Review>)
      }  
        
      </Grid>
    </Box>
     </Container>

            <Footer></Footer>
        </div>
    );
};

export default Home;
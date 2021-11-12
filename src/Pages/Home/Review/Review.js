import React from 'react';
import Grid from '@mui/material/Grid';
import './Review.css'
import Rating from 'react-rating';
const Review = (props) => {
    const {name,description,rating}=props.data;
    return (
        
          <Grid item sx={{margin:'15px auto' ,padding:'20px', alignItems:"center" , overflow:'hidden'}} xs={6} sm={6} md={4} lg={4} className="singleCar reviewstyle">
           <Rating
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star "
           initialRating={rating}
           ></Rating>
            <h3> {name}</h3>
            <h5>Have a look on it: {description}</h5>
         </Grid>
       
    );
};

export default Review;
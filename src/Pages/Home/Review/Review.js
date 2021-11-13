import React from 'react';
import Grid from '@mui/material/Grid';
import './Review.css'
import Rating from 'react-rating';
const Review = (props) => {
    const {name,description,rating}=props.data;
    return (
        
          <Grid item sx={{padding:'0px', margin:'0px' }} xs={6} sm={6} md={4} lg={4} className="singleCar reviewstyle">
          Rating:  <Rating  emptySymbol="far fa-star" readonly className="colorr"  fullSymbol="fas fa-star "  initialRating={rating}  >  </Rating>
            <h3> {name}</h3>
            <h5>Description: {description}</h5>
         </Grid>
       
    );
};

export default Review;
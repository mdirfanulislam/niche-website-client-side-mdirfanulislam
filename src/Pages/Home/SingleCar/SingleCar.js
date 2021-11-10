import React from 'react';
import Grid from '@mui/material/Grid';
import  {Button} from '@mui/material';
const SingleCar = (props) => {
    const {name,price,image,description}=props.data;
    return (
         <Grid item xs={12} sm={12} md={6} lg={6}>
         
            <img src={image} className="img-fluid" alt="" />
            <h3> {name}</h3>
            <h5>Have a look on it: {description}</h5>
            <h3> Price: ${price}</h3>
            <Button variant='contained' color="primary">Purchase</Button>
         </Grid>
    );
};

export default SingleCar;
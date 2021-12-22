import React from 'react';
import Grid from '@mui/material/Grid';
import  {Button} from '@mui/material';
import './SingleCar.css'
import { useHistory } from 'react-router-dom';

const SingleCar = ({data}) => {
    const {name, price, image, description, _id} = data;
    const history=useHistory();
    const handlingPurchase=()=>{
    history.push(`/purchase/${_id}`)
}

    return (
         <Grid item sx={{margin:'15px auto' ,padding:'20px',            alignItems:"center" , overflow:'hidden'}} xs={12} sm={12} md={5} lg={5} className="singleCar">
            <img src={image} className="img-fluid" alt="" />
            <h3> {name}</h3>
            <h5>Have a look on it: {description.slice(0,150)}</h5>
            <h3> Price: ${price}</h3>
            <Button variant='contained' onClick={handlingPurchase} color="primary">Purchase</Button>
         </Grid>
    );
};

export default SingleCar;
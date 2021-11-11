import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import photo from '../../../../images/carmake.jpg'
import './HomeExtra.css'
const HomeExtra = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <Box sx={{ flexGrow: 1 }} >
            <h2  className='my-3 text-success'> Finalize your Idea With us.</h2>
        <Grid container className='boxstyle' spacing={2} sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:"10px"}}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
           <img className='img-fluid' src={photo} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} sx={{textAlign:'center'}}>
            <h4> Wanna make your own designing car ???</h4>
            <h3> Give your design to us . Our Experts will give it a perfect look.</h3>
            <h5> Our experts have a 20 years of huge experience on this field. So , if you wanna make your own dream car then why late Contact with us.</h5>
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default HomeExtra;
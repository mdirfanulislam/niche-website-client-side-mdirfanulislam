import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faWhatsapp,faInstagram,faReddit} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {

   
      const inputHandling= ()=>{
        document.getElementById('inputbaba').value='';

      }

    return (
      <div className="mt-5" >
            
        <Box style={{backgroundColor:"black", color:"white"}} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <h2 className="text-info">Car Store BD</h2>
            <h4>Mail us : carstorebd@gmail.com</h4>
            <h5> Find the latest car for you </h5>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <p>Subscribe us for every latest information</p>
              <input id='inputbaba' type="text" placeholder='your email' />
              <button onClick={inputHandling}> Send</button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <p> Follow us on Social Media for every latest news </p>
            <FontAwesomeIcon className="mx-1 fs-2" icon={faFacebook} />
            <FontAwesomeIcon  className="mx-1 fs-2" icon={faTwitter} />
            <FontAwesomeIcon  className="mx-1 fs-2" icon={faReddit} />
            <FontAwesomeIcon className="mx-1 fs-2" icon={faInstagram} />
            <FontAwesomeIcon className="mx-1 fs-2" icon={faWhatsapp} />
            </Grid>
          </Grid>
        </Box>
          <div className="footer">
          <h4> 2021 - Car Store BD, A Division of Mullen Technologies, Inc. All Rights Reserve.</h4>
          </div>
      </div>
       
    );
};
export default Footer;

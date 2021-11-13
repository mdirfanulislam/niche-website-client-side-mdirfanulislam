import React from 'react';
import NagigationTopForUnique from '../../Components/Navigation/NagigationTopForUnique';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image from '../../images/images.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/Auth/useAuth';
import Alert from '@mui/material/Alert';
const Register = () => {
 
      const {emailNewAccount, success,error}=useAuth()
      const [logindata,SetLoginData]=useState({});
      const history=useHistory()
    const handlingSubmit=e=>{
        e.preventDefault();
        emailNewAccount(logindata.email,logindata.password,logindata.displayName,history)
        // console.log(logindata);
      
        // PasswordSignIn(logindata.email,logindata.password,history,location)
    }
    const handlingOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata};
        newLoginData[field]=value;
        SetLoginData(newLoginData)
        
    }
    return (
        <div>
          <NagigationTopForUnique></NagigationTopForUnique>
        <Box sx={{ flexGrow: 1 , marginTop:'30px'}}>
      <Grid container spacing={2} sx={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
        
        <Grid item xs={12} sm={12} md={7} lg={7}>
        <img src={image} className="img-fluid" alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
        <Typography variant="h4" gutterBottom component="div">
      Please Register  Here   <br/>
      </Typography>
     <form onSubmit={handlingSubmit}>
     <Typography>
      <TextField id="filled-basic" sx={{width:'60%' , marginBottom:'4px'}} onChange={handlingOnChange} name="displayName" label="Your name" variant="outlined" />
          </Typography>
     <Typography>
      <TextField id="filled-basic" sx={{width:'60%' , marginBottom:'4px'}} onChange={handlingOnChange} name="email" label="Your email" variant="outlined" />
          </Typography>
      <Typography>
      <TextField  onChange={handlingOnChange} sx={{width:'60%'}} id="filled-basic" name="password" label="Your password" variant="outlined" />
      <br />
      <Button variant="contained" color="success" type="submit">Register</Button><br />
      { 
      success && <Alert severity="success">user register  in successfully </Alert> 
      }
      { 
      error && <Alert severity="error"> {error} </Alert> 
      }
          </Typography>
          <Typography>
          <h3> Already User?  <Link to="/login"> Login here please </Link> </h3>
          </Typography>
          <Typography>
          
          </Typography>
     </form>
        </Grid>
       
      </Grid>
    </Box>

        </div>
    );
};

export default Register;

import React from 'react';
import NagigationTopForUnique from '../../Components/Navigation/NagigationTopForUnique';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../../images/images.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/Auth/useAuth';
import Alert from '@mui/material/Alert';

const Login = () => {
      styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const [logindata, SetLoginData] = useState({});
      const {emailLogin, success,error} = useAuth();

      const location=useLocation();
      const history=useHistory();

      
      const handlingOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata};
        newLoginData[field]=value;
        SetLoginData(newLoginData)
      }
      
      const handlingSubmit = e => {
        e.preventDefault();
        emailLogin(logindata.email, logindata.password, history, location);
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
      Please Login Here   <br/>
      </Typography>
     <form onSubmit={handlingSubmit}>
     <Typography>
      <TextField id="filled-basic" sx={{width:'60%' , marginBottom:'8px'}} onChange={handlingOnChange} name="email" label="Your email" variant="outlined" />
          </Typography>
      <Typography>
      <TextField  onChange={handlingOnChange} sx={{width:'60%', marginBottom:'20px'}} id="filled-basic" name="password" label="Your password" variant="outlined" />
      <br />
      <Button variant="contained" sx={{ 
        width: '60%', marginBottom: '20px' }} type="submit">Login</Button> <br />
       { 
       success && <Alert severity="success">Login successfully </Alert> 
      }
       { 
      error && <Alert severity="error"> {error} </Alert> 
      }
          </Typography>
          <Typography>
          <h4>New user?  <Link to="/register"> Register here please </Link> </h4>
          </Typography>
        </form>
        </Grid>
       
      </Grid>
    </Box>

        </div>
    );
};

export default Login;
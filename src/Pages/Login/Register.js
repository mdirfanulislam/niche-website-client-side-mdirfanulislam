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
      const {emailNewAccount, success, error} = useAuth()
      const [logindata, SetLoginData] = useState({});

      const history=useHistory()

      const handlingOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata};
        newLoginData[field]=value;
        SetLoginData(newLoginData)
      }
      
      const handlingSubmit = e => {
        if (logindata.password !== logindata.password2) {
          alert('Your password did not match with Your Ry-type password');
          return
        }
        e.preventDefault();
        emailNewAccount(logindata.email, logindata.password, logindata.password2, logindata.displayName, history)
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
              <TextField id="outlined-basic" sx={{width:'60%' , marginBottom:'8px'}} onChange={handlingOnChange} name="displayName" label="Your Name" variant="outlined" />
              </Typography>
              <Typography>
              <TextField id="outlined-basic" sx={{width:'60%' , marginBottom:'8px'}} onChange={handlingOnChange} name="email" label="Your Email" variant="outlined" />
              </Typography>
              <Typography>
              <TextField  onChange={handlingOnChange} sx={{width:'60%', marginBottom:'8px'}} id="outlined-basic" name="password" label="Your Password" variant="outlined" />
              </Typography>
              <Typography>
              <TextField  onChange={handlingOnChange} sx={{width:'60%', marginBottom: '20px'}} id="outlined-basic" name="password2" label="Re-type Your Password" variant="outlined" />
              <br />
              <Button variant="contained" sx={{ 
              width: '60%',  marginBottom: '20px' }} type="submit">Register</Button> <br />
              { 
              success && <Alert severity="success">user register  in successfully </Alert> 
              }
              { 
              error && <Alert severity="error"> {error} </Alert> 
              }
              </Typography>
              <Typography>
              <h4> Already User? <Link to="/login"> Login here please </Link> </h4>
              </Typography>
            </form>
            </Grid>
            </Grid>
          </Box>
        </div>
    );
};

export default Register;

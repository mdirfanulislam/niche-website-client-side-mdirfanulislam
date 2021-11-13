import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import adminimage from '../../../images/admin.jpg'
const AddAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const [ifAdmin,setIfAdmin]=useState(false)
        const onSubmit =data=> {
            const confirmation=window.confirm('Do you wanna make him admin ? ')
            if(confirmation){
                fetch('http://localhost:4000/makeAdmin',{
           method:'PUT',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount){
               setIfAdmin(true)  
           } 
         })  
         }
            else{   }
       }
    return (
        <div>


<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}  sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:"10px"}}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <img  src={adminimage} style={{margin:'0' ,padding:'0'}} className="img-fluid" alt="This is an image " />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <h3 className="my-2"> Add admin here  </h3>
         <form onSubmit={handleSubmit(onSubmit)}>
      <input className="w-75 mb-2"  placeholder="email" {...register("email", { required: true })} /> <br />
      <input type="submit" value='Add admin' />
    </form>
    { 
       ifAdmin && <Alert severity="success"> You have successfully made him admin  </Alert> 
      }

        </Grid>
       
      </Grid>
    </Box>

 
            
   
        </div>
    );
};

export default AddAdmin;
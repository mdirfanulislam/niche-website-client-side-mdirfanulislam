import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
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
             <form onSubmit={handleSubmit(onSubmit)}>
      <input className="w-75 mb-2"  placeholder="email" {...register("email", { required: true })} /> <br />
      
      <input type="submit" value='Add admin' />
    </form>
    { 
       ifAdmin && <Alert severity="success"> You have successfully made him admin  </Alert> 
      }
        </div>
    );
};

export default AddAdmin;
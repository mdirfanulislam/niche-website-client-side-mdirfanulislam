import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../Hooks/Auth/useAuth';
const Review = () => {
  const {user}=useAuth()
    const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data =>{
     console.log(data);
     const confirmation =window.confirm('are you sure to submit this? ? ? ');
     if(confirmation){
       fetch('https://mighty-everglades-10983.herokuapp.com/reviews',{
        method:"POST",
        headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify(data)
    })
       .then(res=>res.json())
       .then(data=>{
         
         if(data.insertedId){
           alert(' WE have got this');
          reset()
         };

       })
     }
  };
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" placeholder="your name" defaultValue={user.displayName} {...register("name", { required: true })} /> <br />
      <input  className="mb-2" placeholder=" your experience" {...register("description", { required: true })} /> <br />
      <input  className="mb-2" placeholder="Rating" type="number" {...register("rating",{ min: 0, max: 5, required:true })} /> <br />
     
      <input type="submit" value="submit" />
    </form>
        </div>
    );
};

export default Review;
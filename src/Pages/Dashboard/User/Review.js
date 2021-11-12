import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      <input {...register("description", { required: true })} />
      <input {...register("rating", { required: true })} />
     
      <input type="submit" />
    </form>
        </div>
    );
};

export default Review;
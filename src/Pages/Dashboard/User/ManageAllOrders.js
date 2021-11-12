import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Alert from '@mui/material/Alert';

const ManageAllOrders = () => {
    const [orders,setOrders]=useState([]);
    const [status,setStatus]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:4000/allOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    const handlingstatus=(id)=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`http://localhost:4000/allOrders/${id}`,{
       method:"PUT",
   })
   .then(res=>res.json())
   .then(data=>{
       if(data.modifiedCount){
       setStatus(true)
       }
   })   
        }
        else{

        }
  
    };

    const handlingDelete=id=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`http://localhost:4000/allOrders/${id}`,{
       method:"DELETE",
   })
   .then(res=>res.json())
   .then(data=>{
       if(data.deletedCount){
      alert(' Yes , deleted successfully ');
      const newdata= orders.filter(data=>data._id!==id);
      setOrders(newdata);
       }
   })   
        }
        else{

        }
    }
    return (
        <div>
          <h3> Here you can manage all of your order {orders.length} </h3>
          <div>
          {
              orders.map(data=> <div  className="divorder">
                  <h2>{data.name}</h2>
                  <h4>{data.email}</h4>
                  <h2> {data.carName}</h2>
                  <h3> id :{data._id}</h3>
                 
                  <button onClick={()=>handlingstatus(data._id)}>{data.status} </button>
                  <button onClick={()=>handlingDelete(data._id)}> Delete   </button>
              </div> 
              )
          }
        </div>
        </div>
    );
};

export default ManageAllOrders;
// onClick={()=>handlingDeleting(data._id)}
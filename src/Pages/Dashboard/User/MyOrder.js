import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from './../../Hooks/Auth/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [orders,setOrders]=useState([]);
    const {user}=useAuth();
    const [id,setId]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:4000/myorders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handlingDeleting=(id)=>{
        const permission =window.confirm(' Are you sure to delete your order')
        if(permission){
            fetch(`http://localhost:4000/myorders/${id}`,
    {      method:"DELETE"  })
    .then(res=>res.json())
    .then(data=> {
        if(data.deletedCount){
            alert(' deleted successfully ');
            const neworder= orders.filter(data=>data._id!== id);
            setOrders(neworder);
            
        }
    }) 
        }
        else {
            
        }
        }
        return (
        <div>
          {
              orders.map(data=> <div  className="divorder">
                  <h2>{data.name}</h2>
                  <h4>{data.email}</h4>
                  <h2> {data.carName}</h2>
                  <h3> id :{data._id}</h3>
                    
                  <button onClick={()=>handlingDeleting(data._id)}> Remove </button>
              </div> 
              )
          }
        </div>
    );
};

export default MyOrder;
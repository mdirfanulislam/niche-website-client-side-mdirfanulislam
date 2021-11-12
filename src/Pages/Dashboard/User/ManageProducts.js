import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/explore')
       .then(res=>res.json())
       .then(data=>setProducts(data))
    },[]);
    const handlingDelete=id=>{
        const confirmation=window.confirm('Are you sure to do this?');
        if(confirmation){
          fetch(`http://localhost:4000/admindelete/${id}`,{
       method:"DELETE",
   })
   .then(res=>res.json())
   .then(data=>{
       if(data.deletedCount){
      alert(' Yes , deleted successfully ');
      const newdata= products.filter(data=>data._id!==id);
      setProducts(newdata);
       }
   })   
        }
        else{

        }
    }
    return (
        <div>
            <h3> Handle your products here {products.length} </h3>
            {
              products.map(data=> <div  className="divorder">
                  <h2>{data.name}</h2>
                  <h4>{data.email}</h4>
                  <h2> {data.price}</h2>
                  <h3> id :{data._id}</h3>
                  <button onClick={()=>handlingDelete(data._id)}> Delete   </button>
              </div> 
              )
          }
        </div>
    );
};

export default ManageProducts;
import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './NavigationTopForUnique.css'
const NagigationTopForUnique = () => {
    return (
        <div>
        <nav class="navbar  navbar-expand-lg navbar-lightt   bg-lighttt">
<div class="container-fluid">
<img src={logo} alt="" width="120" height="24" className="mx-4"/>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
   <li class="nav-item">
     
     <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
   </li>
   <li class="nav-item">
   <Link to="/explore" class="nav-link active" aria-current="page">Explore</Link>
   </li>
   <li class="nav-item">
   <Link to="/dashboard" class="nav-link active" aria-current="page">Dashboard</Link>
   </li>
   {/* <li class="nav-item">
     <a class="nav-link" href="#">My orders</a>
   </li> */}
  
 </ul>

   <li class="nav-item listed">
   <Link to="/login" class="nav-link active" aria-current="page">Login</Link>
   </li>
   <li class="nav-item listed">
     <span> My name</span>
   </li>
  
   

</div>
</div>
</nav>
   </div>
    );
};

export default NagigationTopForUnique;
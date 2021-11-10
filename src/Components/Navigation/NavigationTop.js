import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../Pages/Hooks/Auth/useAuth';
const NavigationTop = () => {
  const {user,signOutUser}=useAuth()
    return (
        <div>
             <nav class="navbar fixed-top navbar-expand-lg navbar-lightt   bg-lightt">
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
      
       
      </ul>
   
      { !user?.email ? <li class="nav-item listed">
   <Link to="/login" class="nav-link active" aria-current="page">Login</Link>
   </li> :  <li class="nav-item listed">
   <Link to="/login"  class="nav-link active" aria-current="page" onClick={signOutUser}>Logout</Link>
   </li> }
 {
   user?.email &&   <li class="nav-item listed">
     <span> Logged in as : {user.email}</span>
   </li>
 }
       
        

    </div>
  </div>
</nav>
        </div>
    );
};

export default NavigationTop;
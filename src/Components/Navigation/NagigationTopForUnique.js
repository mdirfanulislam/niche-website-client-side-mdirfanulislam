import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './NavigationTopForUnique.css'
import useAuth from '../../Pages/Hooks/Auth/useAuth';
const NagigationTopForUnique = () => {
  const {user,signOutUser}=useAuth()
    return (
        <div>
        <nav className="navbar  navbar-expand-lg navbar-lightt   bg-lighttt">
<div className="container-fluid">
<img src={logo} alt="" width="120" height="24" className="mx-4"/>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   <li className="nav-item">
     
     <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
   </li>
   <li className="nav-item">
   <Link to="/explore" className="nav-link active" aria-current="page">Explore</Link>
   </li>
   {
          user.email && <li className="nav-item">
          <Link to="/dashboard" className="nav-link active" aria-current="page">Dashboard</Link>
          </li>
        }
  
  
 </ul>

  { !user?.email ? <li className="nav-item listed">
   <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
   </li> :  <li className="nav-item listed">
   <button style={{borderRadius:'10px' ,color: "black"}}  className="nav-link active button" aria-current="page" onClick={signOutUser}>Logout</button>
   </li> }
 {
   user?.email &&   <li className="nav-item listed">
     <span> Logged in as : {user.displayName}</span>
   </li>
 }
  
   

</div>
</div>
</nav>
   </div>
    );
};

export default NagigationTopForUnique;
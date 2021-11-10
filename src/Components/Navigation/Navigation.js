import React from 'react';
import './Navigation.css';
import header from '../../images/header.png'
import NavigationTop from './NavigationTop';
const Navigation = () => {
    
    return (
        <div >
              <NavigationTop></NavigationTop>
<img  className="img-fluid" src={header} alt="" />
        </div>
    );
};

export default Navigation;
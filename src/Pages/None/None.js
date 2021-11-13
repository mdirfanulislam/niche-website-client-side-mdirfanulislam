import React from 'react';
import NagigationTopForUnique from './../../Components/Navigation/NagigationTopForUnique';
import index from '../../images/index.png'
const None = () => {
    return (
        <div>
            <NagigationTopForUnique></NagigationTopForUnique>
            <img src={index} className='img-fluid w-75' alt="" />
             
        </div>
    );
};

export default None;
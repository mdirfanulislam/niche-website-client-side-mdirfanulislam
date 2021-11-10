import React from 'react';
import { useParams } from 'react-router-dom';
import NagigationTopForUnique from './../../Components/Navigation/NagigationTopForUnique';

const Purchase = () => {
    const {id}=useParams();

    return (
        <div>
            <NagigationTopForUnique></NagigationTopForUnique>
            
            <h3> Hwll o baby {id} </h3>
        </div>
    );
};

export default Purchase;
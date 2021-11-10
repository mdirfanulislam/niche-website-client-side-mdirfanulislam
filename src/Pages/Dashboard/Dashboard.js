import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navigation from '../../Components/Navigation/Navigation';
import NagigationTopForUnique from './../../Components/Navigation/NagigationTopForUnique';

const Dashboard = () => {
    return (
        <div>
           <NagigationTopForUnique></NagigationTopForUnique>
            <h3> this is dashboard</h3>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
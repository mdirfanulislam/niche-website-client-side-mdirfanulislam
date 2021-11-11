import React from 'react';

import NagigationTopForUnique from './../../Components/Navigation/NagigationTopForUnique';
import MainDashboard from './MainDashboard';

const Dashboard = () => {
    return (
        <div>
           <NagigationTopForUnique></NagigationTopForUnique>
           <MainDashboard></MainDashboard>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Dashboard;
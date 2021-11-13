import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Route ,Redirect} from 'react-router-dom';
import useAuth from './../Hooks/Auth/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,loading,admin}=useAuth()
    console.log(admin)
    if(loading){return <CircularProgress />}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;
import React from 'react';
import useAuth from './../Hooks/Auth/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { Route ,Redirect} from 'react-router-dom';
const PrivateRoute = ({ children, ...rest }) => {
    const {user,loading}=useAuth();
    if(loading){return <CircularProgress />}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;
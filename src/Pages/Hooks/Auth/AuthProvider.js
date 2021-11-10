import React, { createContext } from 'react';
import useFirebase from './../../Home/Firebase/Firebase';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    
    const allvalues=useFirebase();
    return (
        <AuthContext.Provider value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
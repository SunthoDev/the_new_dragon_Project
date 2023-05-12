
import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firbase/Firbase.config';

export let AuthContext = createContext("Shipon Dev")

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    let [user, setUser] = useState(null)








    // auth info provider
    let authInfo = {

    }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;


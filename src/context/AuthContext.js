import { Children, createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";}

import React from 'react'
import auth from "../firebase";

const AuthContext = createContext();
function AuthProvider({ Children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth);

    }
    return <AuthContext.Provider value={{ currentUser }}>
        {!loading && Children}
    </AuthContext.Provider>
}

export default AuthProvider
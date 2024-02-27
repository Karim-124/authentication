import { Children, createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import React from 'react'
import auth from "../firebase";

const AuthContext = createContext();
function AuthProvider({ Children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        };
    }, [])
    return <AuthContext.Provider value={{ currentUser, signup }}>
        {!loading && Children}
    </AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);

    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
        })
        return ()=>{
            unSubscribe();
        } 
    },[])
    const info = {user, signUp, logOut, signIn };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;
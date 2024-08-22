import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = () => {
    const [user,setUser] = useState([]);

    const info = {name:'hello'};
    return (
        <AuthContext.Provider value={info}>
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;
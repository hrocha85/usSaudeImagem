import React, { createContext, useState } from 'react';

type IRole = {
    isAdmin?: any;
    setIsAdmin?: any;
}

export const AuthContext = createContext({} as IRole);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAdmin, setIsAdmin] = useState('');

    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}
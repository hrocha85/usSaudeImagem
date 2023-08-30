import React, { createContext, useState } from 'react';

type IRole = {
    UserRole?: any;
    setUserRole?: any;
}

export const AuthContext = createContext({} as IRole);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [UserRole, setUserRole] = useState('');

    return (
        <AuthContext.Provider value={{ UserRole, setUserRole }}>
            {children}
        </AuthContext.Provider>
    );
}
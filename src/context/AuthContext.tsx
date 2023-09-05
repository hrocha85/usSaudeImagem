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
// type IRole = {
//     isAdmin?: any;
//     setIsAdmin?: any;
// }
// import React, { createContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// export const AuthContext = createContext({} as IRole);

// export function AuthProvider({ children }) {
//     const [isAdmin, setIsAdmin] = useState<boolean>();

//     // Inicialize o estado com base nos dados armazenados
//     useEffect(() => {
//         const storedRole = JSON.parse(Cookies.getItem('role'));
//         setIsAdmin(storedRole === 'admin' ? true : false);
//     }, []);


//     return (
//         <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

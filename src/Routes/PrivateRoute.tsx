import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


function PrivateRoute({ element, RouteRole }) {
    // Suponha que você tenha uma função que retorne as funções (roles) do usuário atual

    const roleString = Cookies.get('role');
    if (roleString) {
        const role = JSON.parse(roleString);

        const canAccessConfigurations = role.includes(RouteRole);
        return canAccessConfigurations ? element : <Navigate to="/" />;
    }

    // Função de autorização para verificar se o usuário tem permissão para acessar a rota de configurações

}

// function PrivateRoute({ element }) {
//     let isAdmin;
//     useEffect(() => {
//         const roleString = Cookies.get('role');
//         if (roleString) {
//             const role = JSON.parse(roleString);
//             role === 'admin' ? isAdmin = true : isAdmin = false
//             console.log('rotas', role, isAdmin)
//         }
//         console.log('rotas', isAdmin)
//     }, [])

//     return isAdmin ? element : <Navigate to="/Home" />;
// }

export default PrivateRoute
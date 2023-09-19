import { useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

function PrivateRoute({ element, RouteRoles }) {

    const toast = useToast();
    const roleString = Cookies.get('USGImage_role');
    const tokenString = Cookies.get('USGImage_token');

    if (roleString) {
        const role = JSON.parse(roleString);
        let CanAccessRoute = false;

        RouteRoles.forEach((RouteRole) => {
            if (role.includes(RouteRole)) {
                CanAccessRoute = true;
            }
        });

        if (CanAccessRoute && tokenString) {
            return element;
        } else {
            toast({
                duration: 3000,
                status: 'error',
                title: `Sem permissão para acessar a página!`,
                position: "bottom",
                isClosable: true,
            });
            // Redirecionar para a página inicial ou qualquer outra página de erro
            return <Navigate to="/" />;
        }
    } else {
        toast({
            duration: 3000,
            status: 'error',
            title: `Sem permissão para acessar a página!`,
            position: "bottom",
            isClosable: true,
        });
        return <Navigate to="/Login" />;
    }
}

export default PrivateRoute;



// import Cookies from 'js-cookie';
// import { Navigate } from "react-router-dom";


// function PrivateRoute({ element, RouteRoles }) {

//     const roleString = Cookies.get('USGImage_role');
//     const tokenString = Cookies.get('USGImage_token');
//     if (roleString) {
//         const role = JSON.parse(roleString);
//         let VerifyRole;
//         let CanAccessRoute
//         RouteRoles.map((RouteRole) => {
//             VerifyRole = role.includes(RouteRole);
//             if (VerifyRole) {
//                 CanAccessRoute = true;
//             }
//         })

//         return (CanAccessRoute && tokenString) ? element : <Navigate to="/" />;
//     }
// }

// export default PrivateRoute
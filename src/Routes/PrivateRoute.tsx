import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


function PrivateRoute({ element, RouteRoles }) {

    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
        const role = JSON.parse(roleString);
        let VerifyRole;
        let CanAccessRoute
        RouteRoles.map((RouteRole) => {
            VerifyRole = role.includes(RouteRole);
            if (VerifyRole) {
                CanAccessRoute = true;
            }
        })
        return CanAccessRoute ? element : <Navigate to="/" />;
    }
}

export default PrivateRoute
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectRoutes = () => {
    // const { user } = useContext(UserContext); precisar criar user e importar 
    const location = useLocation();
    return true ? <Outlet /> : 
    <Navigate to="/login" replace state={{from:location}} />;
    }
 


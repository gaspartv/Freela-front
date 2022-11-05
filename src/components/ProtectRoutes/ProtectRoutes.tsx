import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectRoutes = () => {
  const location = useLocation();
  return localStorage.getItem("@token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

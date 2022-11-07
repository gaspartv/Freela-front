import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoadContext } from "../../contexts/LoadContext";

export const ProtectRoutes = () => {
  const { user } = useContext(UserContext);
  const { load } = useContext(LoadContext);
  const location = useLocation();
  console.log(user)

  if (load) {
    return null;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

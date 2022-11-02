import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectRoutes } from "./../components/ProtectRoutes";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
      <Route path="/" element={<Home />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default RouterMain;
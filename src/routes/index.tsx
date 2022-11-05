import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
import { Error } from "../pages/Error";
import { Setting } from "../pages/Setting";
import { RouterDirection } from "../pages/Router";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterDirection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/setting" element={<Setting />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterMain;

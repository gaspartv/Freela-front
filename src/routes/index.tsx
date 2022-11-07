import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
import { Error } from "../pages/Error";
import { Setting } from "../pages/Setting";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
     
      <Route element={<ProtectRoutes />}>
        <Route path="/setting" element={<Setting />} />
      </Route>
      
    </Routes>
  );
};

export default RouterMain;

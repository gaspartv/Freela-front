import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iLoginFormData } from "./../pages/Login/index";
import { LoadContext } from "./LoadContext";
import { iRegisterFormData } from "./../pages/Register/index";

export const UserContext = createContext({} as iUserContext);
export interface iUserContext {
  user: iUser | null;
  userLogin: (data: iLoginFormData) => void;
  userRegister: (data: iRegisterFormData) => void;
  userLogout: () => void;
}

export interface iUser {
  id: number;
  name: string;
  type: string;
}
export interface iPropsContext {
  children: React.ReactNode;
}
export interface iApiError {
  message: string;
}

export const UserProvider = ({ children }: iPropsContext) => {
  const [user, setUser] = useState<iUser | null>(null);
  const { setLoad } = useContext(LoadContext);
  const navigate = useNavigate();

  const userLogin = async (data: iLoginFormData) => {
    setLoad(true);
    try {
      const response = await api.post("login", data);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.accessToken);
      api.defaults.headers.authorization = `Bearer ${response.data.accessToken}`;
      navigate("/");
    } catch {
      toast.error("E-mail ou senha incorreto!");
    } finally {
      setLoad(false);
    }
  };

  const userRegister = async (data: iRegisterFormData) => {
    setLoad(true);

    try {
      const response = await api.post("register", data);
      console.log(response);
      toast.success("conta criada com sucesso!");
      navigate("/login");
    } catch {
      toast.error(
        "Não foi possivel criar sua conta, por favor tente novamente mais tarde!"
      );
    } finally {
      setLoad(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        userRegister
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

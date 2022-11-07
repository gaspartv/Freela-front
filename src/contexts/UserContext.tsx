import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const { setLoad} = useContext(LoadContext);
  const navigate = useNavigate();
  const location = useLocation();

  const userLogin = async (data: iLoginFormData) => {
    setLoad(true);
    try {
      const response = await api.post("login", data);
      setUser(response.data);
      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      api.defaults.headers.authorization = `Bearer ${response.data.accessToken}`;
      const toNavigate = location.state?.from?.pathname || "/";
      navigate(toNavigate, { replace: true });

    } catch {
      toast.error("E-mail ou senha incorreto!");
    } finally {
      setLoad(false);
    }
  };

  const userRegister = async (data: iRegisterFormData) => {
    setLoad(true);
    try {
      await api.post("register", data);
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
    if (user != null) {
      const toNavigate = location.state?.from?.pathname || "/";
      
    }
  }, []);
  console.log(location.state?.from?.pathname);
  useEffect(() => {
    const getUser = async ()  => {
      const token = localStorage.getItem("@token");
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const response = await api.get(`users/${localStorage.getItem("@id")}`);
          setUser(response.data);
        } catch (error) {
          userLogout();
        }
      }
      setLoad(false);
    }
    getUser();
  }, []);

 

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

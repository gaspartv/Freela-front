import { AxiosError } from "axios";
import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iLoginFormData } from "./../pages/Login/index";



export interface iUserContext {
  user: iUser | null;
  userLogin: (data: iLoginFormData) => void;
  userLogout: () => void;
  loading: boolean;
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
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsContext) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userLogin = async (data: iLoginFormData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.accessToken);
      api.defaults.headers.authorization = `Bearer ${response.data.accessToken}`;
      navigate("/");
    } catch (error) {
      const err = error as AxiosError<iApiError>;
      toast.error(err.response?.data.message);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        loading,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

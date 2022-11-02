import { createContext, useState } from "react";
import { api } from "../services/api";

interface iHomeContextProps {
  children: React.ReactNode;
}

interface iHome {
  dataHome: () => Promise<void>;
  dataWorks: any;
}

export const HomeContext = createContext<iHome>({} as iHome);

const HomeProvider = ({ children }: iHomeContextProps) => {
  const [dataWorks, setdataWorks] = useState<iHome | "">("");
  const dataHome = async () => {
    //   const token = localStorage.getItem("authToken");
    try {
      // api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/works");
      setdataWorks(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeContext.Provider value={{ dataWorks, dataHome }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;

import { createContext, useState } from "react";
import { api } from "../services/api";

export interface iHomeContextProps {
  children: React.ReactNode;
}

export interface iHome {
  dataHome: () => Promise<void>;
  dataWorks: any;
}

export const HomeContext = createContext<iHome>({} as iHome);

const HomeProvider = ({ children }: iHomeContextProps) => {
  
  const [dataWorks, setdataWorks] = useState<iHome | "">("");
  const dataHome = async () => {
    try {
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

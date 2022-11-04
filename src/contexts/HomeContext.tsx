import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export interface iHomeContextProps {
  children: React.ReactNode;
}

export interface iHome {
  setdataWorks?: React.Dispatch<React.SetStateAction<never[]>>;
  dataWorks: iWorks[];
}

interface iWorks {
  title: string;
  description: string;
  value: number;
  id: string;
  category: string;
}

export const HomeContext = createContext<iHome>({} as iHome);

const HomeProvider = ({ children }: iHomeContextProps) => {
  const [dataWorks, setdataWorks] = useState([]);
  useEffect(() => {
    api.get("/works").then((res) => setdataWorks(res.data));
  }, []);

  return (
    <HomeContext.Provider value={{ dataWorks }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;

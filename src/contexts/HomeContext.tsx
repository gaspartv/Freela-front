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
    // api.get("/works").then((res) => setdataWorks(res.data));
    async function getWorks() {
      try {
        const { data } = await api.get("/works");
        console.log(data[0]);
        setdataWorks(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getWorks();
  }, []);

  return (
    <HomeContext.Provider value={{ dataWorks }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;

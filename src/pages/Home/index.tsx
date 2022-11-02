import { HomeContext } from "../../contexts/HomeContext";
import { HomeStyled } from "./styles";
import { useContext, useEffect } from "react";

export const Home = () => {
  const { dataWorks, dataHome } = useContext(HomeContext);

  // useEffect(() => {
  //   dataHome();
  // }, [dataHome]);

  console.dir(dataWorks);
  return (
    <HomeStyled>
      <h1>Home</h1>
    </HomeStyled>
  );
};

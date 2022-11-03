import { HomeContext } from "../../contexts/HomeContext";
import { HomeStyled } from "./styles";
import { useContext, useEffect } from "react";

export const Home = () => {
  const { dataWorks, dataHome } = useContext(HomeContext);

  useEffect(() => {
    dataHome();
  }, [dataHome]);
  

  console.log(dataWorks)
  return (
    <HomeStyled>
      <ul> ok
      </ul>
    </HomeStyled>
  );
};


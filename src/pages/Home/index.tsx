import { HomeContext } from "../../contexts/HomeContext";
import { ContainerHome, HomeStyled, HeaderHome } from "./styles";
import { useContext } from "react";
import { SpanTop } from "../../components/SpanTop/style";

export const Home = () => {
  const { dataWorks } = useContext(HomeContext);

  console.log(dataWorks);

  return (
    <>
      <SpanTop></SpanTop>
      <ContainerHome>
        <HeaderHome></HeaderHome>
        <HomeStyled>
          <ul>
            {dataWorks.map((elem) => (
              <li key={elem.id}>
                <h2>{elem.title}</h2>
                <span>{elem.category}</span>
                <p>{elem.description}</p>
                <button>see more</button>
              </li>
            ))}
          </ul>
        </HomeStyled>
      </ContainerHome>
    </>
  );
};

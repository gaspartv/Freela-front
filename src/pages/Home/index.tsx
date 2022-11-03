import { HomeContext } from "../../contexts/HomeContext";
import { HomeStyled } from "./styles";
import { useContext } from "react";
import { SpanTop } from "../../components/SpanTop/style";

export const Home = () => {
  const { dataWorks } = useContext(HomeContext);

  console.log(dataWorks);

  let id = 1

  return (
    <>
      <SpanTop></SpanTop>
      <HomeStyled>
        <ul>
          {dataWorks.map((elem) => (
            <li key={id++}>
              <h2>{elem.title}</h2>
              <span>{elem.category}</span>
              <p>{elem.description}</p>
              <button>see more</button>
            </li>
          ))}
        </ul>
      </HomeStyled>
    </>
  );
};

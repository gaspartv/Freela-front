import { useContext } from "react";
import { Link } from "react-router-dom";

import imgHome from "../../assets/img/imgHome.png";

import { HomeContext } from "../../contexts/HomeContext";
import ModalSeeMore from "../../components/ModalSeeMore";

import {
  ContainerHome,
  HomeStyled,
  HeaderHome,
  HomeTitle,
  BtnsFilter,
} from "./styles";

export const Home = () => {
  const { filterCategory, dataFilter, openModal, setOpenModal, setIdModal } = useContext(HomeContext);

  function HandleClickModal(Target: any) {
    const ID = Target.id;
    setOpenModal(true);
    setIdModal(ID);
  }

  return (
    <>
      <ContainerHome>
        <HeaderHome>
          <span className="logo">Frilla</span>
          <nav>
            <Link to={"/home"}>Works |</Link>
            <Link to={"/login"}>Login |</Link>
            <Link to={"/register"}>Cadastro</Link>
          </nav>
        </HeaderHome>

        <HomeTitle>
          <div>
            <h1>
              Bem-vindos à <span>Nova Era do Trabalho</span>
            </h1>
            <p>
              Conectamos os melhores talentos independentes com as melhores
              empresas
            </p>
          </div>
          <figure>
            <img src={imgHome} alt="imagem Home" />
          </figure>
        </HomeTitle>

        <BtnsFilter>
          <ul>
            <li><button onClick={() => filterCategory("todas")}>Todos</button></li>
            <li><button onClick={() => filterCategory("tech")}>Tech</button></li>
            <li><button onClick={() => filterCategory("reforco")}>Reforço</button></li>
            <li><button onClick={() => filterCategory("design")}>Design</button></li>
            <li><button onClick={() => filterCategory("financas")}>Finanças</button></li>
            <li><button onClick={() => filterCategory("eletrica")}>Eletrica</button>
            </li>
          </ul>
        </BtnsFilter>

        {openModal && <ModalSeeMore/>}

        <HomeStyled>
          <ul>
            {dataFilter.map((elem) => (
              <li key={elem.id}>
                <div className="cardTitle">
                  <h2>{elem.title}</h2>
                  <span>{elem.category}</span>
                </div>
                <div className="cardDescription">
                  <p>{elem.description}</p>
                  <button onClick={(event) => HandleClickModal(event.target)} id={elem.id}>
                    Ver mais
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </HomeStyled>
      </ContainerHome>
    </>
  );
};

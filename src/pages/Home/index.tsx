import imgHome from "../../assets/img/imgHome.png";
import { HomeContext } from "../../contexts/HomeContext";
import {
  ContainerHome,
  HomeStyled,
  HeaderHome,
  HomeTitle,
  BtnsFilter,
} from "./styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ModalSeeMore from "../../components/ModalSeeMore";

export const Home = () => {
  const { filteCategory, dataFilter, openModal, setOpenModal, setIdModal } = useContext(HomeContext);

  function HandleClickModal (Target: any) {
    const ID = Target.id
    setOpenModal(true)
    setIdModal(ID)
  }


  return (
    <>
      <ContainerHome>
        <HeaderHome>
          <span>Frilla</span>
          <nav>
            <Link to={"/home"}>Works</Link>
            <span>//</span>
            <Link to={"/login"}>Login</Link>
            <span>//</span>
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
            <li>
              <button onClick={() => filteCategory("Todas")}>Todos</button>
            </li>
            <li>
              <button onClick={() => filteCategory("Tech")}>Tech</button>
            </li>
            <li>
              <button onClick={() => filteCategory("reforço")}>Reforço</button>
            </li>
            <li>
              <button onClick={() => filteCategory("design")}>Design</button>
            </li>
            <li>
              <button onClick={() => filteCategory("finanças")}>
                Finanças
              </button>
            </li>
            <li>
              <button onClick={() => filteCategory("eletrica")}>
                Eletrica
              </button>
            </li>

            {/* {
             dataWorks.map((elem) => (<li key={elem.id}><button onClick={()=>filteCategory(elem.category)}>{elem.category}</button></li>))
            } */}
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
                    see more
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

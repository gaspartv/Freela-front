import { useContext } from "react";

import imgHome from "../../assets/img/imgHome.png";

import { HomeContext } from "../../contexts/HomeContext";
import ModalSeeMore from "../../components/ModalSeeMore";

import { ContainerHome, HomeStyled, HomeTitle, BtnsFilter } from "./styles";
import { LinkSettingStyled, NavStyled } from "../../components/Nav/styles";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const Home = () => {
  const navigate = useNavigate();
  const { userLogout, user } = useContext(UserContext);
  const { filterCategory, dataFilter, openModal, setOpenModal, setIdModal } =
    useContext(HomeContext);

  function HandleClickModal(Target: any) {
    const ID = Target.id;
    setOpenModal(true);
    setIdModal(ID);
  }

  return (
    <>
      <ContainerHome>
        <NavStyled>
          <h1>frilla</h1>
          <div>
            {user ? (
              <>
                <p>{user.name}</p>
                <ChevronRightIcon />
                <LinkSettingStyled to="/setting">
                  Configurações<span></span>
                </LinkSettingStyled>
                <ChevronRightIcon />
                <button
                  onClick={() => {
                    userLogout();
                    navigate("/");
                  }}
                >
                  Sair<span></span>
                </button>
              </>
            ) : (
              <>
                <LinkSettingStyled to="/login">
                  Login<span></span>
                </LinkSettingStyled>
                <ChevronRightIcon />
                <LinkSettingStyled to="/register">
                  Criar conta<span></span>
                </LinkSettingStyled>
              </>
            )}
          </div>
        </NavStyled>

        <HomeTitle>
          <img src={imgHome} alt="imagem Home" />

          <div>
            <h1>
              Bem-vindos à <span>Nova Era do Trabalho</span>
            </h1>
            <p>
              Conectamos os melhores talentos independentes com as melhores
              empresas
            </p>
          </div>
        </HomeTitle>

        <BtnsFilter>
          <ul>
            <li>
              <button onClick={() => filterCategory("todas")}>Todos</button>
            </li>
            <li>
              <button onClick={() => filterCategory("tech")}>Tech</button>
            </li>
            <li>
              <button onClick={() => filterCategory("reforco")}>Reforço</button>
            </li>
            <li>
              <button onClick={() => filterCategory("design")}>Design</button>
            </li>
            <li>
              <button onClick={() => filterCategory("financas")}>
                Finanças
              </button>
            </li>
            <li>
              <button onClick={() => filterCategory("eletrica")}>
                Eletrica
              </button>
            </li>
          </ul>
        </BtnsFilter>

        {openModal && <ModalSeeMore />}

        <HomeStyled>
          <ul>
            {dataFilter.map((elem) => (
              <li key={elem.id}>
                <h2>{elem.title}</h2>
                <span>{elem.category}</span>
                <p>{elem.description}</p>
                <p>{elem.contact}</p>
                <strong>
                  {elem.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={(event) => HandleClickModal(event.target)}
                  id={elem.id}
                >
                  Ver mais
                </button>
              </li>
            ))}
          </ul>
        </HomeStyled>
      </ContainerHome>
    </>
  );
};

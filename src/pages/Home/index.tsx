import imgHome from "../../assets/img/imgHome.png";
import { HomeContext } from "../../contexts/HomeContext";
import {
  ContainerHome,
  HomeStyled,
  HeaderHome,
  HomeTitle,
  BtnsFilter,
} from "./styles";
import { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  const { dataWorks, filteCategory, dataFilter } = useContext(HomeContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <button onClick={() => filteCategory("Todas")}>Todas</button>
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
              <button onClick={() => filteCategory("fletrica")}>
                Eletrica
              </button>
            </li>

            {/* {
             dataWorks.map((elem) => (<li key={elem.id}><button onClick={()=>filteCategory(elem.category)}>{elem.category}</button></li>))
            } */}
            
          </ul>
        </BtnsFilter>

        <HomeStyled>
          <ul>

            {dataWorks.map((elem) => (
              <li key={elem.id}>
                <div className="cardTitle">
                  <h2>{elem.title}</h2>
                  <span>{elem.category}</span>
                </div>

                <div className="cardDescription">
                  <p>{elem.description}</p>
                  <button onClick={onOpen} id={elem.id}>
                    see more
                  </button>
                </div>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{elem.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{elem.description}</ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Tenho Interesse!</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </li>
            ))}



          </ul>
        </HomeStyled>
      </ContainerHome>
    </>
  );
};

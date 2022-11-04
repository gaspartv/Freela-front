import imgHome from "../../assets/img/imgHome.png";
import { HomeContext } from "../../contexts/HomeContext";
import { ContainerHome, HomeStyled, HeaderHome, HomeTitle, HeaderLine, BtnsFiltes } from "./styles";
import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";

export const Home = () => {
  const { dataWorks } = useContext(HomeContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(dataWorks);

  return (
    <>
      <HeaderLine />
      <ContainerHome>
        <HeaderHome>
          <span>Frilla</span>
          <nav>
            <a href="">Works</a>
            <span>//</span>
            <a href="">Login</a>
            <span>//</span>
            <a href="">Cadastro</a>
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

        <BtnsFiltes>
          <ul>
            <li><button>Tecnologia</button></li>
            <li><button>Reforço</button></li>
            <li><button>Design</button></li>
            <li><button>Finanças</button></li>
            <li><button>Elétrica</button></li>
          </ul>
        </BtnsFiltes>

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
                    <ModalBody>
                      {elem.description}
                    </ModalBody>

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

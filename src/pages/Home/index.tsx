import { HomeContext } from "../../contexts/HomeContext";
import { ContainerHome, HomeStyled, HeaderHome } from "./styles";
import { useContext } from "react";
import { SpanTop } from "../../components/SpanTop/style";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const Home = () => {
  const { dataWorks } = useContext(HomeContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <button onClick={onOpen} id={elem.id}>
                  see more
                </button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{elem.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <h2>{elem.description}</h2>
                    </ModalBody>

                    <ModalFooter>
                      <button onClick={onClose}>Close</button>
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

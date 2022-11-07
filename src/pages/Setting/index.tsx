import { Nav } from "../../components/Nav";
import { InterestedStyled, ServiceStyled, SettingStyled } from "./styles";
import add from "../../assets/add.png";
import { useContext } from "react";
import { SettingContext } from "../../contexts/SettingContext";
import { ModalAddService } from "../../components/ModalAddService";
import { ModalDeleteService } from "../../components/ModalDeleteService";
import { ModalEditService } from "../../components/ModalEditService";

export const Setting = () => {
  const {
    openModal,
    openModalEdit,
    openModalDelete,
    setOpenModal,
    deleteService,
    editService,
    mySerivice,
  } = useContext(SettingContext);

  return (
    <SettingStyled>
      {openModal && <ModalAddService />}
      {openModalEdit && <ModalEditService />}
      {openModalDelete && <ModalDeleteService />}
      <Nav />
      <InterestedStyled>
        <div>
          <button onClick={() => setOpenModal(true)}>
            <img src={add} alt="Add" />
            <p>Anunciar serviço</p>
          </button>
          <ul>
            <h2>Interessados:</h2>
            <li>
              <p>Caio Alcarria</p>
              <span>Desenvolver website</span>
            </li>
            <li>
              <p>Caio Alcarria</p>
              <span>Desenvolver website</span>
            </li>
          </ul>
        </div>
      </InterestedStyled>
      <ServiceStyled>
        <h2>Meus serviços:</h2>
        <ul>
          {mySerivice &&
            mySerivice.map((elem, index) => (
              <li key={index}>
                <span>{elem.category}</span>
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
                <div>
                  <button onClick={() => editService(elem.id)}>Editar</button>
                  <button onClick={() => deleteService(elem.id)}>Deletar</button>
                </div>
              </li>
            ))}
        </ul>
      </ServiceStyled>
    </SettingStyled>
  );
};

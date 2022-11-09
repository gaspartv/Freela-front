import { useContext } from "react";

import { Nav } from "../../components/Nav";
import { SettingContext } from "../../contexts/SettingContext";
import { ModalAddService } from "../../components/ModalAddService";
import { ModalDeleteService } from "../../components/ModalDeleteService";
import { ModalEditService } from "../../components/ModalEditService";

import { InterestedStyled, ServiceStyled, SettingStyled } from "./styles";
import { AnimationContext } from "../../contexts/AnimationContext";

export const Setting = () => {
  const { parent } = useContext(AnimationContext);
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
            <span>+</span>
            <p>Anunciar serviço</p>
          </button>
        </div>
      </InterestedStyled>
      <ServiceStyled>
        <h2>Meus serviços:</h2>
        <ul ref={parent}>
          {mySerivice &&
            mySerivice.map((elem, index) => (
              <li key={index}>
                <span>{elem.category}</span>
                <h3>{elem.title}</h3>
                <p>Tel: {elem.contact}</p>
                <p>{elem.description}</p>
                <p>
                  {Number(elem.value).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <div>
                  <button onClick={() => editService(elem.id)}>Editar</button>
                  <button onClick={() => deleteService(elem.id)}>
                    Deletar
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </ServiceStyled>
    </SettingStyled>
  );
};

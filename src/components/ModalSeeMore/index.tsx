import { useContext } from "react";

import { HomeContext } from "../../contexts/HomeContext";

import { ModalStyled } from "./styles";

const ModalSeeMore = () => {
  const { setOpenModal, IdModal, dataWorks } = useContext(HomeContext);

  let WorkFiltered = dataWorks.filter(
    (ele) => Number(ele.id) === Number(IdModal)
  );

  return (
    <ModalStyled>
      <span>
        <h2>{WorkFiltered[0].title}</h2>
        <button onClick={() => setOpenModal(false)}>X</button>
        <h3>{WorkFiltered[0].description}</h3>
        <div>
          <strong>Contato:</strong> {WorkFiltered[0]?.contact}
        </div>
      </span>
    </ModalStyled>
  );
};

export default ModalSeeMore;

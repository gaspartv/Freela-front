import { useContext } from "react";
import {HomeContext} from "../../contexts/HomeContext";
import { ModalStyled } from "./styles";

const ModalSeeMore = () => {

    const {openModal, setOpenModal, IdModal, dataWorks } = useContext(HomeContext);


    let WorkFiltered = dataWorks.filter(ele => Number(ele.id) === Number(IdModal))

    console.log(WorkFiltered)

    return ( 
        <ModalStyled>
            <span>
                <h2>{WorkFiltered[0].title}</h2>
                <button onClick={() => setOpenModal(false)}>
                    X
                </button>
                <h3>{WorkFiltered[0].description}</h3>    
                <div>Contato</div>     
            </span>
        </ModalStyled>
     );
}
 
export default ModalSeeMore;
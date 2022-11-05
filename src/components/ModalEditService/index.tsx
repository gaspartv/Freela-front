import { CloseIcon } from "@chakra-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SettingContext } from "../../contexts/SettingContext";
import { AddServiceSchema } from "../../validations/AddServiceSchema";
import { iServiceData } from "../ModalAddService";
import { ModalStyled } from "./styles";

export const ModalEditService = () => {
  const { setOpenModalEdit, mySerivice, editServiceApi } =
    useContext(SettingContext);

  const { register, handleSubmit } = useForm<iServiceData>({
    resolver: yupResolver(AddServiceSchema),
  });

  return (
    <ModalStyled>
      <span>
        <form onSubmit={handleSubmit(editServiceApi)}>
          <span onClick={() => setOpenModalEdit(false)}>
            <CloseIcon />
          </span>
          <label>Título</label>
          <input
            type="text"
            placeholder={mySerivice[0].title}
            {...register("title")}
          />

          <label>Descrição</label>
          <input
            type="text"
            placeholder={mySerivice[0].description}
            {...register("description")}
          />

          <label>Categoria</label>
          <input
            type="text"
            placeholder={mySerivice[0].category}
            {...register("category")}
          />

          <label>Valor</label>
          <input
            type="text"
            placeholder={`${mySerivice[0].value}`}
            {...register("value")}
          />

          <div>
            <button type="submit">Editar</button>
            <button onClick={() => setOpenModalEdit(false)}>Cancelar</button>
          </div>
        </form>
      </span>
    </ModalStyled>
  );
};

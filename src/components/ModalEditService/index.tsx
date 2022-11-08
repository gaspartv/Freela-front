import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SettingContext } from "../../contexts/SettingContext";
import { AddServiceSchema } from "../../validations/AddServiceSchema";
import { iServiceData } from "../ModalAddService";

import { ModalStyled } from "./styles";

export const ModalEditService = () => {
  const { setOpenModalEdit, editServ, editServiceApi } =
    useContext(SettingContext);

  const { register, handleSubmit } = useForm<iServiceData>({
    resolver: yupResolver(AddServiceSchema),
  });

  return (
    <ModalStyled>
      <span>
        <form onSubmit={handleSubmit(editServiceApi)}>
          <label>Título</label>
          <input
            type="text"
            placeholder={editServ[0].title}
            {...register("title")}
          />

          <label>Descrição</label>
          <input
            type="text"
            placeholder={editServ[0].description}
            {...register("description")}
          />

          <label>Categoria</label>
          <select {...register("category")}>
            <option value="">Selecione</option>
            <option value="tech">Tech</option>
            <option value="reforco">Reforço</option>
            <option value="design">Design</option>
            <option value="financas">Finanças</option>
            <option value="eletrica">Eletrica</option>
          </select>

          <label>Valor</label>
          <input
            type="text"
            placeholder={`${editServ[0].value}`}
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

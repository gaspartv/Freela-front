import { ModalStyled } from "./styles";
import { CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { SettingContext } from "../../contexts/SettingContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddServiceSchema } from "../../validations/AddServiceSchema";

export interface iServiceData {
  title: string;
  description: string;
  category: string;
  value: number;
  id: number;
  userId: number;
}

export const ModalAddService = () => {
  const { setOpenModal, addService } = useContext(SettingContext);

  const {
    register,
    handleSubmit,
  } = useForm<iServiceData>({
    resolver: yupResolver(AddServiceSchema),
  });

  return (
    <ModalStyled>
      <span>
        <form onSubmit={handleSubmit(addService)}>
          <span onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </span>
          <label>Título</label>
          <input
            type="text"
            placeholder="Digite o título"
            {...register("title")}
          />

          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite a descrição"
            {...register("description")}
          />

          <label>Categoria</label>
          <input
            type="text"
            placeholder="Digite a categoria"
            {...register("category")}
          />

          <label>Valor</label>
          <input
            type="text"
            placeholder="Digite o valor"
            {...register("value")}
          />

          <div>
            <button type="submit">Adicionar</button>
            <button onClick={() => setOpenModal(false)}>Cancelar</button>
          </div>
        </form>
      </span>
    </ModalStyled>
  );
};

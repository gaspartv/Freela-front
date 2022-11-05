import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../../validations/RegisterSchema";
import { ParagrafoErro } from "../../components/ParagraphyError";
import { UserContext } from "../../contexts/UserContext";

import {
  Terms,
  SectionForm,
  RegisterStyled,
  BlockLogo,
  DivForm,
} from "./styles";
import { useNavigate } from "react-router-dom";

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
  type: string;
}

export const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("@token") && navigate("/home");
  }, []);

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <RegisterStyled>
      <DivForm>
        <BlockLogo></BlockLogo>
        <SectionForm>
          <form onSubmit={handleSubmit(userRegister)}>
            <h1>Cadastro</h1>
            <label>Nome</label>
            <input
              type="name"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <ParagrafoErro>{errors.name && errors.name?.message}</ParagrafoErro>

            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              {...register("email")}
            />
            <ParagrafoErro>
              {errors.email && errors.email?.message}
            </ParagrafoErro>

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha..."
              {...register("password")}
            />
            <ParagrafoErro>
              {errors.password && errors.password?.message}
            </ParagrafoErro>

            <label>Confirmação de senha</label>
            <input
              type="checkPassword"
              placeholder="Confirma sua senha"
              {...register("checkPassword")}
            />
            <ParagrafoErro>
              {errors.checkPassword && errors.checkPassword?.message}
            </ParagrafoErro>

            <label>Tipo da sua conta</label>
            <select defaultValue={"DEFAULT"} required {...register("type")}>
              <option value="DEFAULT" disabled>
                Qual o tipo da conta?
              </option>
              <option value="provider">Prestador</option>
              <option value="advertiser">Anunciante</option>
            </select>

            <Terms>
              <input type="checkbox" name="terms" value="terms" required />
              <label htmlFor="terms">concordo com os termos e condições</label>
            </Terms>

            <button type="submit">Entrar</button>
          </form>
        </SectionForm>
      </DivForm>
    </RegisterStyled>
  );
};

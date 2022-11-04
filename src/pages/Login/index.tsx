import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../validations/LoginSchema";
import { ParagrafoErro } from "../../components/ParagraphyError";
import { UserContext } from "../../contexts/UserContext";

import {
  BlockLogo,
  DivForm,
  LinkStyled,
  LoginStyled,
  SectionForm,
} from "./styles";
import { useNavigate } from "react-router-dom";

export interface iLoginFormData {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);//

  useEffect(() => {
    const verifyUser = () => {
      localStorage.getItem("@token") && navigate("/home");
    };
    verifyUser();
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <LoginStyled>
      <DivForm>
        <BlockLogo></BlockLogo>
        <SectionForm>
          <form onSubmit={handleSubmit(userLogin)}>
            <h1>Login</h1>
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
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <ParagrafoErro>
              {errors.password && errors.password?.message}
            </ParagrafoErro>
            <LinkStyled to="/register">
              Ainda não possui cadastro? <span></span>
            </LinkStyled>
            <button type="submit">Entrar</button>
          </form>
        </SectionForm>
      </DivForm>
    </LoginStyled>
  );
};

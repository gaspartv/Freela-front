import { SpanTop } from "../../components/SpanTop/style";
import { LoginStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/LoginSchema";
import { ParagrafoErro } from "../../components/ParagraphyError";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";



export interface iLoginFormData {
  email: string;
  password: string;
}

export const Login = () => {
  // const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: iLoginFormData) => {
   userLogin(data);
  }

  

  return (
    <LoginStyled>
      <SpanTop />
      <main>
        <div className="Logimg">
          <img src="" alt="" />
        </div>
        <section>
          <div className="SideDesktop"></div>
          <div className="Content">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <>
                <label htmlFor="email">E-mail</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Digite seu E-mail"
                />
                <ParagrafoErro>{errors.email?.message}</ParagrafoErro>
                <label htmlFor="password">Senha</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Digite sua senha"
                />
                <ParagrafoErro>{errors.password?.message}</ParagrafoErro>
                <span>Ainda não possui cadastro?</span>
                <button type="submit">Entrar</button>
              </>
            </form>
          </div>
        </section>
      </main>
    </LoginStyled>
  );
};



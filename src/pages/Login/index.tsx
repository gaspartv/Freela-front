
import { SpanTop } from "../../components/SpanTop/style";
import { LoginStyled } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { AuthContext } from "../../contexts/AuthContext";

// Deixei comentado as coisas que eu não sei o nome ou não foram feitas ainda!
// a mensagem de erro está comentada pois estava dando problema, caso alguem saiba resolver, pode dale!

export const Login = () => {

  // const { LoginUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    password: yup.string().required("Senha obrigatório"),
    email: yup.string().required("Nome obrigatório").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });




  return (


  <LoginStyled>


      <SpanTop/>
      <main>
        <div className="Logimg"><img src="" alt="" /></div>
        <section>
          <div className="SideDesktop"></div>
          <div className="Content">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(LoginUser)}>
              <>
              <h2>E-mail</h2>
              <input  {...register("email")} type="email" placeholder="Digite seu E-mail" />
              {/* <p>{errors.email?.message}</p> */}
              <h2>Senha</h2>
              <input {...register("password")} type="password" placeholder="Digite seu E-mail" />
              {/* <p>{errors.password?.message}</p> */}
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

import { SpanTop } from "../../components/SpanTop/style";
import { LoginStyled } from "./styles";

export const Login = () => {
  return (


  <LoginStyled>


      <SpanTop/>
      <main>
        <div className="Logimg"><img src="" alt="" /></div>
        <section>
          <div className="SideDesktop"></div>
          <div className="Content">
            <h1>Login</h1>
            <form>
              <h2>E-mail</h2>
              <input type="email" placeholder="Digite seu E-mail" />
              <p>erro</p>
              <h2>Senha</h2>
              <input type="email" placeholder="Digite seu E-mail" />
              <p>erro</p>
              <span>Ainda não possui cadastro?</span>
              <button>Entrar</button>
            </form>
          </div>
        </section>
      </main>
    
  </LoginStyled>
  
  
  );
};

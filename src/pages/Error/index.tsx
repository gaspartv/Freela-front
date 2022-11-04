import { ErrorStyled, ErrorContainer, Warning } from "./styles";
import imagemError from "../../assets/error.png";
export const Error = () => {
  return (
    <ErrorStyled>
      <ErrorContainer>
        <img src={imagemError} alt="" />
        <Warning>
          <h1>404</h1>
          <h2>Ops! a pagina não foi encontrada</h2>
        </Warning>
      </ErrorContainer>
    </ErrorStyled>
  );
};

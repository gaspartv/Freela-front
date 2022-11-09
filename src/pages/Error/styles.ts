import styled from "styled-components";

export const ErrorStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const ErrorContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 500px;
  }
    @media (max-width: 720px) {
      flex-direction: column;
        img{
          width: 300px;
        }
    }
`;
export const Warning = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 250px;
    color: var(--Primary);
     @media (max-width: 720px) {
      font-size: 130px;
     }
  }
  > h2 {
    width: 500px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: var(--Primary);
    @media (max-width: 720px) {
      width: 300px;
      font-size: 30px;
      line-height: 40px;
  }
}
`;

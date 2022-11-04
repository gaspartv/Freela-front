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
    color: #177369;
  }
  > h2 {
    width: 500px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #177369;
  }
`;

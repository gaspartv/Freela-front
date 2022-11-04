import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
`;

export const HomeStyled = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ul {
    border: solid;
  }
  li {
    display: flex;
    flex-direction: column;
    border: solid;
  }
`;

export const HeaderHome = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    gap: 4px;
    display: flex;
  }
`;

export const HomeTitle = styled.div`
  /* border: solid; */
  display: flex;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    color: green;
  }

  h1{
    font-size: 48px;
  }

  p{
    font-size:24px;
  }
`;

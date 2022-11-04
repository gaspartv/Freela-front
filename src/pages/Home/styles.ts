import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
`;

export const HomeStyled = styled.div`
  /* border: solid red; */
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 6px 0px;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    border: solid;
    gap: 10px;
    border: 1px solid #177369;
    border-radius: 8px;
    padding: 14px;
    height: 170px;
    width: 400px;
    border-radius: 25px;
  }

  .cardTitle {
    display: flex;
    justify-content: space-between;
  }

  .cardDescription {
    display: flex;
    flex-direction: column;
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
  /* border: solid red; */
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    color: var(--Primary);
  }

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
  }
`;

export const HeaderLine = styled.div`
  background-image: linear-gradient(
    to bottom,
    var(--Primary) 20px,
    var(--Secondary) 0
  );
  height: 20px;
`;

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
    gap: 20px;
    border: 1px solid #177369;
    border-radius: 8px;
    padding: 20px;
    height: 247px;
    width: 521px;
    border-radius: 25px;
    margin-bottom: 30px;
    justify-content: center;

    .cardTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cardDescription {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
    }

    span {
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;

      color: #177369;
    }

    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
    }

    button {
      width: 148px;
      height: 31px;
      left: 25px;
      top: 199px;

      background: #177369;
      border-radius: 50px;
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;

      color: #f5eed0;
    }
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

export const BtnsFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 80px 0;

  ul{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    width: 140px;
    height: 60px;
    background: #177369;
    border-radius: 10px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;

    color: #f5eed0;
  }
`;

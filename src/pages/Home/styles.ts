import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100vw;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderHome = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-width: 1200px;
  margin-top: 20px;

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
    max-width: 600px;
    width: 50%;
  }
  span {
    color: var(--Primary);
  }

  h1 {
    font-size: 48px;
    line-height: 48px;
  }

  p {
    font-size: 24px;
    line-height: 35px;
  }

  figure {
    width: 50%;
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    img {
      width: 368px;
      height: 295px;
    }

    h1 {
      font-size: 41px;
      line-height: 49px;
    }

    p {
      font-size: 21px;
      line-height: 36px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 368px;
      height: 295px;
    }

    h1 {
      font-size: 25px;
      line-height: 32px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    img {
      width: 280px;
      height: 280px;
    }

    h1 {
      font-size: 29px;
      line-height: 37px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      margin-top: 13px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 21px;
      line-height: 29px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
      margin-top: 13px;
    }
  }
`;

export const BtnsFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 80px 0;

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    width: 140px;
    height: 60px;
    background: var(--Primary);
    border-radius: 10px;
    cursor: pointer;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    border: transparent;

    color: var(--Secondary);
  }

  button:hover {
    background: #135b53;
  }

  @media (max-width: 425px) {
    overflow-x: scroll;

    button {
      height: 44px;
    }

    ul {
      gap: 10px;
    }
  }
  
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
    border: 1px solid var(--Primary);
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

      color: var(--Primary);
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
      cursor: pointer;

      background: var(--Primary);
      border-radius: 50px;
      border: transparent;
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;

      color: var(--Secondary);
    }

    button:hover {
      background: #135b53;
    }
  }

  @media (max-width: 1024px) {
    li {
      width: 465px;
    }
  }

  @media (max-width: 768px) {
    li {
      width: 337px;
      height: 220px;
    }
  }

  @media (max-width: 425px) {
    li {
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 320px) {
    .cardTitle h2 {
      font-size: 16px;
    }

    li p {
      font-size: 12px;
    }
  }
`;

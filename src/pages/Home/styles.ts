import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 80%;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const NavStyled = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 50px;

  nav {
    gap: 4px;
    display: flex;
    font-weight: bolder;
    color: #000000;
    font-size: larger;
  }

  .logo {
    font-family: "Italiana";
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: #000000;
    cursor: default;
  }
  .link{
    color: #000000;
    text-decoration: none
  }

 
`;

export const HomeTitle = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  span {
    color: var(--Primary);
  }
  h1 {
    font-size: 60px;
    line-height: 80px;
  }
  p {
    font-size: 24px;
    line-height: 35px;
  }
  figure {
    width: 50%;
    max-width: 600px;
  }


  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;

    
    figure {
     
    width: 100%;
    display: flex;
    justify-content: center;

  }
    
    figure img {
      width: 80%;
    }
    div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }


    h1 {
      font-size: 41px;
      line-height: 49px;
    }
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }


`;

export const BtnsFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
  overflow-x: scroll;

  ::-webkit-scrollbar {
        width: 0px;
        height: 0px;}

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    
  }
  button {
    width: 200px;
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

  @media (max-width: 1200px) {
   
     overflow-x: scroll;
    button {
      width: 112px; 
    } 
    ul {
      gap: 10px;
    }
  }

  
 
`;
export const HomeStyled = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  width: 100%;

  margin-top: 20px;
  padding: 6px 0px;
  min-height: 1000px;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
   
    
    
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid var(--Primary);
    border-radius: 8px;
    padding: 20px;
    height: 247px;
    width: 45%;
    border-radius: 25px;
    margin-bottom: 50px;
    justify-content: center;

    .cardTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
      }
      > span {
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        color: var(--Primary);
      }
    }
    .cardDescription {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > p {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
      }
      > button {
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
        :hover {
          background: #135b53;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    ul{
      justify-content: center;
    }
    li {
      
      height: 238px;
      width: 100%;
      
    
  }
  }`
import styled, { keyframes } from "styled-components";

const entring = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ContainerHome = styled.div`
  max-width: 1100px;
  min-width: 300px;
  margin: 32px auto;
  animation: ${entring} 0.5s;
`;

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 40px;
  > img {
    max-width: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 450px;
    > h1 {
      font-size: 38px;
      line-height: 48px;
      > span {
        color: var(--Primary);
      }
    }
    > p {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const BtnsFilter = styled.div`
  width: 100%;
  margin-bottom: 40px;
  > ul {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    overflow: auto;
    > li {
      > button {
        min-width: 120px;
        height: 60px;
        background-color: var(--Primary);
        border-radius: 10px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        border: transparent;
        color: var(--Secondary);
        cursor: pointer;
        :hover {
          background: #135b53;
        }
      }
    }
  }
`;

export const HomeStyled = styled.div`
  width: 100%;
  > ul {
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    > li {
      animation: ${entring} 2s;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: space-between;
      width: 100%;
      max-width: 450px;
      border: 2px solid var(--Primary);
      border-radius: 8px;
      padding: 16px;
      position: relative;
      > h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 1px;
      }
      > span {
        position: absolute;
        top: 16px;
        right: 16px;
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        color: var(--Primary);
      }
      > p {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 1px;
        white-space: nowrap;
        width: 15rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      @media (min-width: 768px){
       p{

          width: 25rem;;

        }
      }
      > strong {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
      }
      > button {
        align-self: flex-end;
        width: 148px;
        height: 31px;
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
`;

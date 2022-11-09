import styled, { keyframes } from "styled-components";

const modalEfectOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const modalEfectTransition = keyframes`
  0% {
    transform: scale(0, 0);
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const ModalStyled = styled.div`
  animation: ${modalEfectOpacity} 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  z-index: 101;
  animation: animateModal 0.3s;
  @keyframes animateModal {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes animateModalContainer {
    0% {
      opacity: 0;
      transform: scale(0, 0);
    }

    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
  > span {
    animation: ${modalEfectTransition} 0.5s;
    width: 100%;
    max-width: 400px;
    min-height: 200px;
    background-color: var(--Secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    position: relative;
    gap: 16px;
    border: 5px solid var(--Primary-Hover);
    margin: 0 16px;
    animation: animateModalContainer 0.5s;
    > h2 {
      font-size: 2rem;
      width: 100%;
      padding: 20px 0;
      text-align: center;
      background-color: var(--Primary-Hover);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      color: var(--Input-Background);
    }
    > button {
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: transparent;
      border: 0;
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--Input-Background);
    }
    > p {
      margin: 0 16px;
    }
    > div {
      margin: 0 16px 20px 16px;
      display: flex;
      align-items: center;
      gap: 1rem;

      > a {

        text-decoration: none;
        color: var(--Primary);
        font-weight: 700;


      }

      > a:hover{

        color: var(--Primary-Hover);

      }
    }
  }
`;

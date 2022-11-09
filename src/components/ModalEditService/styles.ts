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

animation: ${modalEfectOpacity} 1s;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  animation: animateModal 2s;
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
    padding: 16px;
    width: 100%;
    animation: animateModalContainer 0.5s;
    > form {
      max-width: 400px;
      background-color: var(--Secondary);
      display: flex;
      flex-direction: column;
      padding: 32px;
      border-radius: 16px;
      border: 5px solid var(--Primary-Hover);
      position: relative;
      margin: 0 auto;
      > span {
        position: absolute;
        top: 8px;
        right: 10px;
        cursor: pointer;
      }
      > label {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
        padding-left: 8px;
      }
      > input {
        padding: 12px;
        border-radius: 8px;
        border: none;
        /* margin-bottom: 20px; */
      }
      > select {
        padding: 12px;
        border-radius: 8px;
        border: none;
        /* margin-bottom: 20px; */
      }
      > div {
        display: flex;
        justify-content: center;
        gap: 16px;
        > button {
          border-radius: 50px;
          background-color: #177369;
          border: none;
          font-weight: 700;
          font-size: 15px;
          line-height: 22px;
          color: #f5eed0;
          padding: 6px 22px;
          cursor: pointer;
        }
      }
    }
  }
`;

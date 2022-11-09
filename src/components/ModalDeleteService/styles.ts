import styled from "styled-components";

export const ModalStyled = styled.div`
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
    padding: 16px;
    width: 100%;
    animation: animateModalContainer 0.5s;
    > div {
      max-width: 400px;
      background-color: var(--Secondary);
      display: flex;
      flex-direction: column;
      padding: 32px;
      border-radius: 16px;
      border: 5px solid var(--Primary-Hover);
      position: relative;
      gap: 12px;
      text-align: center;
      margin: 0 auto;
      > div {
        display: flex;
        justify-content: center;
        gap: 15px;
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

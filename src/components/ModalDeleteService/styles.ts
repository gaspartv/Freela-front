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
  > span {
    padding: 16px;
    width: 100%;
    > div {
      max-width: 400px;
      background-color: var(--Secondary);
      display: flex;
      flex-direction: column;
      padding: 32px;
      border-radius: 16px;
      border: 2px solid var(--Primary-Hover);
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

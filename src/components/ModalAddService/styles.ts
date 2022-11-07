import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

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
    > form {
      max-width: 400px;
      background-color: var(--Secondary);
      display: flex;
      flex-direction: column;
      padding: 32px;
      border-radius: 16px;
      position: relative;
      animation: ${AnimationFadeIn} 0.4s linear forwards;
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
        margin-bottom: 20px;
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

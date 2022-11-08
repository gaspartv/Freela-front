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
    padding: 3rem;
    max-width: 80%;
    background-color: var(--Secondary);
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    position: relative;
    gap: 2rem;

    > h2 {
      font-size: 2rem;
    }

    > div {
      margin: 0 auto;
      position: relative;
      bottom: -1rem;
    }

    > button {
      position: absolute;
      top: 1rem;
      right: 2rem;
      background-color: transparent;
      border: 0;
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

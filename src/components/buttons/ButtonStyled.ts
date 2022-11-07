import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 52px;
  background: var(--Primary);
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: var(--Secondary);
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    filter: brightness(0.9);
  }
`;

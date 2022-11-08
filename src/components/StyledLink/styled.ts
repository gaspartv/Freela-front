import { Link } from "react-router-dom";
import styled from "styled-components";

import { entring } from "../../styles/animation";

export const LinkStyled = styled(Link)`
  /* width: 185px; */
  width: fit-content;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  color: rgba(23, 115, 105, 0.6);
  margin-top: 14px;
  margin-left: 20px;
  text-decoration: none;
  position: relative;
  > span {
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 1px;
    background-color: var(--Primary);
  }
  :hover span {
    animation: ${entring} 0.3s linear forwards;
  }
  :hover {
    color: var(--Primary);
  }
`;

import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const entring = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  > h1 {
    font-family: "Italiana";
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: var(--Black);
    cursor: default;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    > img {
      max-width: 50px;
    }
    > p {
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      color: var(--Black);
      cursor: default;
    }
    > button {
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      color: var(--Black);
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: relative;
      > span {
        position: absolute;
        left: 0;
        bottom: 3px;
        height: 2px;
        background-color: var(--Primary);
      }
      :hover span {
        animation: ${entring} 0.3s linear forwards;
      }
    }
  }
`;

export const LinkSettingStyled = styled(Link)`
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: var(--Black);
  cursor: pointer;
  position: relative;
  text-decoration: none;
  > span {
    position: absolute;
    left: 0;
    bottom: 3px;
    height: 2px;
    background-color: var(--Primary);
  }
  :hover span {
    animation: ${entring} 0.3s linear forwards;
  }
`;

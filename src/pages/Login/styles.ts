import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

const entring = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const LoginStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
`;

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const BlockLogo = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 176px;
    height: 100%;
    background: var(--Primary);
    border-radius: 10px;
  }
`;

export const SectionForm = styled.section`
  width: 100%;
  max-width: 400px;
  > form {
    padding: 0 27px;
    display: flex;
    flex-direction: column;
    animation: ${AnimationFadeIn} 0.4s linear forwards;

    > h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      color: var(--Primary);
      cursor: default;
    }
    > label {
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      color: var(--Black);
      margin: 6px;
      cursor: default;
    }
    > input {
      background: var(--Input-Background);
      border-radius: 8px;
      height: 52px;
      padding: 0 25px;
      border: none;
    }
    > button {
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
    }
  }
`;

export const LinkStyled = styled(Link)`
  width: 185px;
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

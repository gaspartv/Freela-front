import PhoneInput from "react-phone-input-2";
import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const RegisterStyled = styled.div`
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
    width: 200px;
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
    animation: ${AnimationFadeIn} 0.1s linear forwards;

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
    > div {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      > input {
        background: var(--Input-Background);
        border-radius: 8px;
        height: 52px;
        padding: 0 25px;
        border: none;
      }
      > span {
        position: absolute;
        top: 18px;
        right: 10px;
        cursor: pointer;
      }
    }
    > select {
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
      margin-top: 10px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Terms = styled.span`
  gap: 10px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: rgba(23, 115, 105, 0.6);
  margin: 25px 0;
  text-decoration: none;
  cursor: pointer;
  > label {
    cursor: pointer;
  }
  > input {
    cursor: pointer;
  }
  > :hover {
    color: var(--Primary);
  }
`;

export const PhoneInputStyled = styled(PhoneInput)`
  .form-control {
    width: 100%;
  }
`;

import styled from "styled-components";

export const SettingStyled = styled.div`
  max-width: 1200px;
  margin: 32px auto;
`;

export const InterestedStyled = styled.section`
  > div {
    display: flex;
    padding: 16px;
    gap: 40px;
    > button {
      border: 1px solid var(--Primary);
      border-radius: 25px;
      background-color: var(--Primary);
      color: var(--Secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 15px 30px;
      cursor: pointer;
      transition: 0.3s;
      > span {
        font-size: 35px;
        transition: 0.3s;
      }
      > p {
        font-weight: 700;
        font-size: 22px;
        line-height: 48px;
        transition: 0.3s;
      }
      :hover {
        background-color: var(--Primary-Hover);
      }
      :hover p {
        color: var(--Secondary);
      }
      :hover span {
        color: var(--Secondary);
      }
    }
  }
`;

export const ServiceStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 40px;
  > h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    color: var(--Primary);
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    > li {
      width: 100%;
      max-width: 450px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px solid var(--Primary);
      border-radius: 25px;
      padding: 30px;
      position: relative;
      > span {
        position: absolute;
        top: 30px;
        right: 30px;
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        color: var(--Primary);
      }
      > h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: var(--Black);
      }
      > p {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: var(--Black);
      }
      > div {
        display: flex;
        gap: 16px;
        > button {
          border-radius: 50px;
          background-color: var(--Primary);
          border: none;
          font-weight: 700;
          font-size: 15px;
          line-height: 22px;
          color: var(--Secondary);
          padding: 6px 22px;
          cursor: pointer;
          transition: 0.3s;
          :hover {
            background-color: var(--Primary-Hover);
          }
        }
      }
    }
  }
`;

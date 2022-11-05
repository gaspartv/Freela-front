import styled from "styled-components";

export const SettingStyled = styled.div`
  max-width: 1100px;
  margin: 32px auto;
`;

export const InterestedStyled = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 40px;
    > button {
      max-width: 520px;
      height: 195px;
      border: 1px solid #177369;
      border-radius: 25px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 0 30px;
      cursor: pointer;
      > p {
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        color: #000000;
      }
    }
    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      > h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        color: #177369;
      }
      > li {
        max-width: 520px;
        border: 1px solid #177369;
        border-radius: 25px;
        padding: 20px;
        cursor: pointer;
        > p {
          font-weight: 700;
          font-size: 24px;
          line-height: 36px;
          color: #000000;
        }
        > span {
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: rgba(0, 0, 0, 0.46);
        }
      }
    }
  }
  @media (min-width: 768px) {
    > div {
      flex-direction: row-reverse;
      align-items: center;
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
    color: #177369;
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
      border: 1px solid #177369;
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
        color: #177369;
      }
      > h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
      }
      > p {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #000000;
      }
      > div {
        display: flex;
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

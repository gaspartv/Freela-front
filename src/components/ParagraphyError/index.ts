import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const ParagrafoErro = styled.p`
  color: red;
  font-size: 11px;
  margin-left: 6px;
  font-weight: 500;
  height: 12px;
  animation: ${AnimationFadeIn} 1s linear forwards;
`;

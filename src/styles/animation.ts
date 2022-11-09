import { keyframes } from "styled-components";

export const AnimationFadeIn = keyframes`
    from{
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

export const entring = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const exiting = keyframes`

  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;





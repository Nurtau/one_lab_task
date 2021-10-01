import styled, { keyframes } from "styled-components";

export const Label = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const LoadingLabel = styled(Label)`
  animation: ${disappear} 1.2s ease-in-out reverse infinite;
`;

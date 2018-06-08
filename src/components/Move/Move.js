import styled, { keyframes } from 'styled-components';

import { C } from '../../constants';

const { GAME_HEIGHT } = C;

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${GAME_HEIGHT}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;

export default Move;

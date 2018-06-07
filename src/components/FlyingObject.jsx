import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { C } from '../constants';
import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';

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

const FlyingObject = ({ position }) => (
  <Move>
    <FlyingObjectBase position={position} />
    <FlyingObjectTop position={position} />
  </Move>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default FlyingObject;

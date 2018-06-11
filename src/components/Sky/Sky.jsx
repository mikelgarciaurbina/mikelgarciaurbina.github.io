import React from 'react';

import { C } from '../../constants';
import styles from './styles';

const { GAME_HEIGHT, SKY_AND_GROUND_WIDTH } = C;
const { skyStyle } = styles;

const Sky = () => (
  <rect
    style={skyStyle}
    x={SKY_AND_GROUND_WIDTH / -2}
    y={100 - GAME_HEIGHT}
    width={SKY_AND_GROUND_WIDTH}
    height={GAME_HEIGHT}
  />
);

export default Sky;

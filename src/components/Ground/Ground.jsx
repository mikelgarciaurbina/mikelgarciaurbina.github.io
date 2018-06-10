import React from 'react';

import { C } from '../../constants';
import styles from './styles';

const { SKY_AND_GROUND_WIDTH } = C;
const { divisionStyle, groundStyle } = styles;

const Ground = () => (
  <g id="ground">
    <rect
      id="ground-2"
      data-name="ground"
      style={groundStyle}
      x={SKY_AND_GROUND_WIDTH / -2}
      y={0}
      width={SKY_AND_GROUND_WIDTH}
      height={100}
    />
    <line
      x1={SKY_AND_GROUND_WIDTH / -2}
      y1={0}
      x2={SKY_AND_GROUND_WIDTH / 2}
      y2={0}
      style={divisionStyle}
    />
  </g>
);

export default Ground;

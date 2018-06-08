import React from 'react';

import { F } from '../../constants';
import constants from './constants';
import styles from './styles';

const { pathFromBezierCurve } = F;
const { cubicBezierCurve, halfBase, height } = constants;
const { cannonBaseStyle } = styles;

const CannonBase = props => (
  <g>
    <path style={cannonBaseStyle} d={pathFromBezierCurve(cubicBezierCurve)} />
    <line
      x1={-halfBase}
      y1={height}
      x2={halfBase}
      y2={height}
      style={cannonBaseStyle}
    />
  </g>
);

export default CannonBase;

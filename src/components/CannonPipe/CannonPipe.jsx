import React from 'react';
import PropTypes from 'prop-types';

import { F } from '../../constants';
import constants from './constants';
import styles from './styles';

const { pathFromBezierCurve } = F;
const { cubicBezierCurve, halfMuzzle, yBasis } = constants;
const { cannonPipeStyle } = styles;

const CannonPipe = props => (
  <g transform={`rotate(${props.rotation}, 0, 0)`}>
    <path style={cannonPipeStyle} d={pathFromBezierCurve(cubicBezierCurve)} />
    <line
      x1={-halfMuzzle}
      y1={-yBasis}
      x2={halfMuzzle}
      y2={-yBasis}
      style={cannonPipeStyle}
    />
  </g>
);

CannonPipe.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default CannonPipe;

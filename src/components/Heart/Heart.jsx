import React from 'react';
import PropTypes from 'prop-types';

import { F } from '../../constants';
import styles from './styles';

const { pathFromBezierCurve } = F;
const { heartStyle } = styles;

const Heart = ({ position }) => {
  const leftSide = {
    initialAxis: {
      x: position.x,
      y: position.y,
    },
    initialControlPoint: {
      x: -20,
      y: -20,
    },
    endingControlPoint: {
      x: -40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };

  const rightSide = {
    initialAxis: {
      x: position.x,
      y: position.y,
    },
    initialControlPoint: {
      x: 20,
      y: -20,
    },
    endingControlPoint: {
      x: 40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };

  return (
    <g filter="url(#shadow)">
      <path style={heartStyle} d={pathFromBezierCurve(leftSide)} />
      <path style={heartStyle} d={pathFromBezierCurve(rightSide)} />
    </g>
  );
};

Heart.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default Heart;

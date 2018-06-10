import React from 'react';
import PropTypes from 'prop-types';

import { F } from '../../constants';
import constants from './constants';
import styles from './styles';

const { pathFromBezierCurve } = F;
const { getHeart } = constants;
const { heartStyle } = styles;

const Heart = ({ position }) => {
  const { leftSide, rightSide } = getHeart(position);

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

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const { ballStyle } = styles;

const CannonBall = ({ position }) => (
  <ellipse style={ballStyle} cx={position.x} cy={position.y} rx="16" ry="16" />
);

CannonBall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default CannonBall;

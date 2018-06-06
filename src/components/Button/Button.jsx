import React from 'react';
import PropTypes from 'prop-types';

import { buttonProps, textProps } from './constants';

const Button = ({ onClick, y }) => (
  <g filter="url(#shadow)">
    <rect {...buttonProps} onClick={onClick} y={-y} />
    <text {...textProps} onClick={onClick} y={-(y-80)}>
      Tap To Start!
    </text>
  </g>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  y: PropTypes.number.isRequired,
};

export default Button;

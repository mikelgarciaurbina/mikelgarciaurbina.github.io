import React from 'react';
import PropTypes from 'prop-types';

import { buttonProps, textProps } from './constants';

const Button = ({ onClick }) => (
  <g filter="url(#shadow)">
    <rect {...buttonProps} onClick={onClick} />
    <text {...textProps} onClick={onClick}>
      Tap To Start!
    </text>
  </g>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

import { buttonProps, textProps } from './constants';

const Button = ({ label, onClick, y }) => (
  <g filter="url(#shadow)">
    <rect {...buttonProps} onClick={onClick} y={-y} />
    <text {...textProps} onClick={onClick} y={-(y - 80)}>
      {label}
    </text>
  </g>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  y: PropTypes.number.isRequired,
};

export default Button;

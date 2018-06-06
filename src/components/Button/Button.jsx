import React from 'react';
import PropTypes from 'prop-types';

import {
  buttonPrimaryProps,
  buttonSecondaryProps,
  textProps,
} from './constants';

const Button = ({ label, onClick, primary, y }) => {
  const buttonProps = primary ? buttonPrimaryProps : buttonSecondaryProps;

  return (
    <g filter="url(#shadow)">
      <rect {...buttonProps} onClick={onClick} y={-y} />
      <text {...textProps} onClick={onClick} y={-(y - 80)}>
        {label}
      </text>
    </g>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  y: PropTypes.number.isRequired,
};

Button.defaultProps = {
  primary: false,
};

export default Button;

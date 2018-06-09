import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const { scoreStyle } = styles;

const CurrentScore = ({ score }) => (
  <g filter="url(#shadow)">
    <text style={scoreStyle} x="300" y="80">
      {score}
    </text>
  </g>
);

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;

import React from 'react';

import { T } from '../../constants';
import { pathFromBezierCurve } from '../../utils/formulas';
import styles from './styles';

const { TITLE } = T.COMPONENTS;
const { textStyle } = styles;

const Title = () => {
  const TitleLineCurve = {
    initialAxis: {
      x: -550,
      y: -800,
    },
    initialControlPoint: {
      x: 200,
      y: -200,
    },
    endingControlPoint: {
      x: 800,
      y: -200,
    },
    endingAxis: {
      x: 1150,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path id="TitlePath" d={pathFromBezierCurve(TitleLineCurve)} />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#TitlePath">{TITLE}</textPath>
      </text>
    </g>
  );
};

export default Title;

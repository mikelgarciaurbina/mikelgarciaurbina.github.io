import React from 'react';

import { T } from '../../constants';
import { TitleLineCurve } from './constants';
import { pathFromBezierCurve } from '../../utils/formulas';
import styles from './styles';

const { TITLE } = T.COMPONENTS;
const { textStyle } = styles;

const Title = () => (
  <g filter="url(#shadow)">
    <defs>
      <path id="TitlePath" d={pathFromBezierCurve(TitleLineCurve)} />
    </defs>
    <text {...textStyle}>
      <textPath xlinkHref="#TitlePath">{TITLE}</textPath>
    </text>
  </g>
);

export default Title;

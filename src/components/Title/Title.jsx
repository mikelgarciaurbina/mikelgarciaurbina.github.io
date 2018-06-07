import React from 'react';

import { F, T } from '../../constants';
import { TitleLineCurve } from './constants';
import styles from './styles';

const { TITLE } = T.COMPONENTS;
const { pathFromBezierCurve } = F;
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

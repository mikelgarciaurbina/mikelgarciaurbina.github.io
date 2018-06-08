import { C } from '../../constants';
import styles from './styles';

const { GAME_WIDTH } = C;
const { primaryStyle, secondaryStyle, textStyle } = styles;

export const buttonSecondaryProps = {
  x: GAME_WIDTH  / -2,
  width: GAME_WIDTH ,
  height: 120,
  rx: 10, // border radius
  ry: 10, // border radius
  style: secondaryStyle,
};

export const buttonPrimaryProps = {
  ...buttonSecondaryProps,
  style: primaryStyle,
};

export const textProps = {
  textAnchor: 'middle',
  x: 0,
  style: textStyle,
};

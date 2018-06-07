import { C } from '../../constants';

const { GAME_WIDTH } = C;

export const buttonSecondaryProps = {
  x: GAME_WIDTH  / -2,
  width: GAME_WIDTH ,
  height: 120,
  rx: 10, // border radius
  ry: 10, // border radius
  style: {
    fill: 'transparent',
    cursor: 'pointer',
  },
};

export const buttonPrimaryProps = {
  ...buttonSecondaryProps,
  style: {
    ...buttonSecondaryProps.style,
    fill: '#da0d15',
  },
};

export const textProps = {
  textAnchor: 'middle',
  x: 0,
  style: {
    fontFamily: '"Joti One", cursive',
    fontSize: 60,
    fill: '#e3e3e3',
    cursor: 'pointer',
  },
};

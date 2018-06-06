import { gameWidth } from '../../utils/constants';

export const buttonProps = {
  x: gameWidth / -2,
  width: gameWidth,
  height: 120,
  rx: 10, // border radius
  ry: 10, // border radius
  style: {
    fill: '#da0d15',
    cursor: 'pointer',
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

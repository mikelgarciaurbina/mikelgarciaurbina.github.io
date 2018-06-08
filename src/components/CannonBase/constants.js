const baseWith = 80;
const halfBase = 40;
const height = 60;
const negativeHeight = height * -1;

export default {
  cubicBezierCurve: {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  },

  halfBase,
  height,
};

const muzzleWidth = 40;
const halfMuzzle = 20;
const height = 100;
const yBasis = 70;

export default {
  cubicBezierCurve: {
    initialAxis: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  },

  halfMuzzle,
  yBasis,
};

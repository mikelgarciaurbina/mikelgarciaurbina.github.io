const getLeftSide = position => {
  return {
    initialAxis: {
      x: position.x,
      y: position.y,
    },
    initialControlPoint: {
      x: -20,
      y: -20,
    },
    endingControlPoint: {
      x: -40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };
};
const getRightSide = position => {
  return {
    initialAxis: {
      x: position.x,
      y: position.y,
    },
    initialControlPoint: {
      x: 20,
      y: -20,
    },
    endingControlPoint: {
      x: 40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };
};
const getHeart = position => {
  return {
    leftSide: getLeftSide(position),
    rightSide: getRightSide(position),
  };
};

export default {
  getHeart,
};

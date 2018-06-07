import { C } from '../constants';

const {
  CREATE_INTERVAL,
  FLYING_OBJECTS_STARTER_POSITIONS,
  FLYING_OBJECTS_STARTER_Y_AXIS,
  MAX_FLYING_OBJECTS,
} = C;

export default state => {
  if (!state.gameState.started) return state;

  const now = new Date().getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject =
    now - lastObjectCreatedAt.getTime() > CREATE_INTERVAL &&
    flyingObjects.length < MAX_FLYING_OBJECTS;

  if (!createNewObject) return state;

  const id = new Date().getTime();
  const predefinedPosition = Math.floor(Math.random() * MAX_FLYING_OBJECTS);
  const flyingObjectPosition =
    FLYING_OBJECTS_STARTER_POSITIONS[predefinedPosition];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: FLYING_OBJECTS_STARTER_Y_AXIS,
    },
    createdAt: new Date().getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [...state.gameState.flyingObjects, newFlyingObject],
      lastObjectCreatedAt: new Date(),
    },
  };
};

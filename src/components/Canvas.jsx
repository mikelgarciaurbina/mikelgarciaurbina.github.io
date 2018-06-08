import React from 'react';
import PropTypes from 'prop-types';

import { C, T } from '../constants';
import CannonPipe from './CannonPipe';
import CurrentScore from './CurrentScore';
import Ground from './Ground';
import Heart from './Heart';
import ReactJS from './ReactJS';
import Sky from './Sky';
import { Button, CannonBall, CannonBase, Title } from './';

const { CURRICULUM, GIT, LINK } = C.URLS;
const { CV, GITHUB, HISTORY, LINKEDIN } = T.MENU;

const Canvas = props => {
  const { angle, gameState, redirectTo, shoot, startGame, trackMouse } = props;
  const gameHeight = 1200;
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight,
  ];
  const lives = [];
  for (let i = 0; i < gameState.lives; i++) {
    const heartPosition = {
      x: -180 - i * 70,
      y: 35,
    };
    lives.push(<Heart key={i} position={heartPosition} />);
  }

  return (
    <svg
      id="aliens-go-home-canvas"
      onClick={shoot}
      onMouseMove={trackMouse}
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      {gameState.cannonBalls.map(cannonBall => (
        <CannonBall key={cannonBall.id} position={cannonBall.position} />
      ))}
      <CannonPipe rotation={angle} />
      <CannonBase />
      <CurrentScore score={gameState.kills} />
      {!gameState.started && (
        <g>
          <Button label={HISTORY} onClick={startGame} primary y={750} />
          <Button label={LINKEDIN} onClick={() => redirectTo(LINK)} y={500} />
          <Button label={GITHUB} onClick={() => redirectTo(GIT)} y={370} />
          <Button label={CV} onClick={() => redirectTo(CURRICULUM)} y={240} />
          <Title />
        </g>
      )}
      {gameState.started &&
        gameState.flyingObjects.map(flyingObject => (
          <ReactJS
            key={flyingObject.id}
            position={flyingObject.position}
          />
        ))}
      {lives}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    flyingObjects: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    started: PropTypes.bool.isRequired,
  }).isRequired,
  redirectTo: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;

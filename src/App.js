import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { F } from './constants';
import Canvas from './components/Canvas';

const { getCanvasPosition } = F;

class App extends Component {
  constructor(props) {
    super(props);

    this.shoot = this.shoot.bind(this);
  }

  componentDidMount() {
    const self = this;

    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);

    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  redirectTo(url) {
    window.open(url, "_blank");
  }

  shoot() {
    this.props.shoot(this.canvasMousePosition);
  }

  render() {
    const { angle, gameState, startGame } = this.props;

    return (
      <Canvas
        angle={angle}
        gameState={gameState}
        redirectTo={this.redirectTo}
        shoot={this.shoot}
        startGame={startGame}
        trackMouse={event => this.trackMouse(event)}
      />
    );
  }
}

App.propTypes = {
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
  moveObjects: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;

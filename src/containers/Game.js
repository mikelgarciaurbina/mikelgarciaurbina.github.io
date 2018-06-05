import { connect } from 'react-redux';

import App from '../App';
import { moveObjects, shoot, startGame } from '../actions';

const mapStateToProps = ({ angle, gameState }) => ({
  angle,
  gameState,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: mousePosition => {
    dispatch(moveObjects(mousePosition));
  },
  shoot: mousePosition => {
    dispatch(shoot(mousePosition));
  },
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(mapStateToProps, mapDispatchToProps)(App);

export default Game;

import React from 'react';
import ReactDOM from 'react-dom';

import { newSimulation } from './simulation.js';
import { GameCard } from '../components/gameCard.js';

window.onload = function () {
    let game = newSimulation();
    game.playGame();
    ReactDOM.render(<GameCard game={game}/>, document.getElementById("game"));
}

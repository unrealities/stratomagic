import React from 'react';
import ReactDOM from 'react-dom';

import { newSimulation } from './simulation.js';
import { GameCard } from '../components/gameCard.js';

window.onload = function () {
    let season = newSimulation();
    ReactDOM.render(<GameCard game={season.games[0]}/>, document.getElementById("game"));
}

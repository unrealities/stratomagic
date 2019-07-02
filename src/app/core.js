import { LineupCardContainer } from '../components/lineupCard.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { newSimulation } from './simulation.js';

window.onload = function () {
    let game = newSimulation();
    ReactDOM.render(<LineupCardContainer lineup={game.hLineup}/>, document.getElementById("results"));
    // ReactDOM.render(<PlayerCardContainer />, document.getElementById("results"));
}

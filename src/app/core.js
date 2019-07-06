import { LineupCardContainer } from '../components/lineupCard.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { newSimulation } from './simulation.js';

window.onload = function () {
    let game = newSimulation();
    ReactDOM.render(<LineupCardContainer lineup={game.hLineup}/>, document.getElementById("homeBattingOrder"));
    ReactDOM.render(<LineupCardContainer lineup={game.aLineup}/>, document.getElementById("awayBattingOrder"));
}

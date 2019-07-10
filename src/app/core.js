import { BattingBoxScoreCardContainer } from '../components/boxScoreCard.js';
import { LineupCardContainer } from '../components/lineupCard.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { newSimulation } from './simulation.js';

window.onload = function () {
    let game = newSimulation();
    console.log(JSON.stringify(game.boxScore.aBatters));
    ReactDOM.render(<LineupCardContainer lineup={game.hLineup}/>, document.getElementById("homeBattingOrder"));
    ReactDOM.render(<LineupCardContainer lineup={game.aLineup}/>, document.getElementById("awayBattingOrder"));
    ReactDOM.render(<BattingBoxScoreCardContainer boxScore={game.boxScore.aBatters}/>, document.getElementById("awayBattingBoxScore"));
    ReactDOM.render(<BattingBoxScoreCardContainer boxScore={game.boxScore.hBatters}/>, document.getElementById("homeBattingBoxScore"));
}

import React from 'react';
import ReactDOM from 'react-dom';

import { newSimulation } from './simulation.js';
import { SeasonCard } from '../components/seasonCard.js';

window.onload = function () {
    let season = newSimulation();
    ReactDOM.render(<SeasonCard season={season}/>, document.getElementById("season"));
}

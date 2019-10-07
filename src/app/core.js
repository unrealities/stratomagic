import React from 'react';
import ReactDOM from 'react-dom';

import { newTeam } from './simulation.js';
import { FieldCard } from '../components/fieldCard.js';
import { Game } from './game.js';

window.onload = function () {
    let t1 = newTeam(1);
    let t2 = newTeam(2);
    let game = new Game('sim', t1[0], t2[0], t1[1], t2[1]);

    ReactDOM.render(<FieldCard game={game} boxScore={game.boxScore}/>, document.getElementById("field"));
}

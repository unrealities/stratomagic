import { PlayerCardContainer } from '../components/playerCard.js';

import React from 'react';
import ReactDOM from 'react-dom';

window.onload = function () {
    ReactDOM.render(<PlayerCardContainer />, document.getElementById("results"));
}

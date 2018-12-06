import { Players } from '../data/players.js';
import { halfInning } from './inning.js';
import { PlayerCard, PlayerCardContainer } from '../components/playerCard.js';

import React from 'react';
import ReactDOM from 'react-dom';

// calc calculates the number of runs per game score by the given batter/pitcher
function calc() {
    ReactDOM.render(<PlayerCardContainer />, document.getElementById("results"));

    for (let b=0; b<Players.length-1; b++) {
        let trials = 100;
        let totalRuns = 0;

        if (isPitcher(Players[b])) {    
            continue;
        }
        for (let i=0; i<trials; i++){
            let hi = halfInning(Players[b], Players[1565]);
            totalRuns += hi["runs"];
        }
        let averageGameRuns = 9 * (totalRuns/trials);

        // slowdown appears to occur on the ammount of data being displayed
        // since we're just interested in the best performing players, created
        // a cutoff point
        if (averageGameRuns < 7) {
            continue;
        }

        let card = <PlayerCard name={Players[b]["Name"]}
                    obc={Players[b]["OB/C"]}
                    points={Players[b]["Pts."]}
                    avgGameRuns={averageGameRuns} />;
        // TODO: Append cards to the container to display all cards
        PlayerCardContainer.addCard(card)

        // document.getElementById("results").innerHTML += display;
        // Against 1565 PM
        // 1295,Barry Bonds,14,910,7.83
        // 1545,Jeff Bagwell '94,14,800,7.40
        // 3460,Barry Bonds,16,900,12.73
        // 3589,Barry Bonds,14,860,8.09
    }
}

window.onload = function () {
    var button = document.querySelector("#calc-button");
    button.addEventListener("click", function(){
        calc();
    });
}

// determine if a player is a pitcher or not (a hitter)
function isPitcher(player) {
    for (let i=0; i<player["Positions"].length; i++) {
        // Positions uses standard baseball scoring numbering. With the
        // following modifications: 0: DH, 1: SP, 10: RP, 11: CL
        if (i === 1 || i > 9) {
            if (player["Positions"][i] >= 0) {
                return true;
            }
        }
    }
    return false;
}

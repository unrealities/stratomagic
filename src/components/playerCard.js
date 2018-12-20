import { Players } from '../data/players.js';
import { halfInning } from '../app/inning.js';
import { RandomPositiveInteger } from '../lib/math.js';
import React from 'react';

import style from "../style/index.css";

export class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="playerCard">
                <h1>{this.props.name}</h1>
                <div className="pos">{this.props.pos}</div>
                <div className="onBase">{this.props.obc}</div>
                <div className="points">{this.props.points}</div>
            </div>
        );
    }
}

export class PlayerCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        this.randomHitters();
    }

    // determine if a player is a pitcher or not (a hitter)
    isPitcher(player) {
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

    positions(posArr) {
        let posStrArr = ['DH','SP','C','1B','2B','3B','SS','LF','CF','RF','RP','CL'];
        let playerPosStrArr = [];
        for (let i=0; i<posStrArr.length; i++) {
            if (posArr[i] >= 0) {
                playerPosStrArr.push(`${posStrArr[i]}+${posArr[i]}`);
            }
        }

        return playerPosStrArr;
    }

    goodHitters() {
        let goodCards = [];

        // TODO: Update DOM async?
        for (let b=0; b<Players.length-1; b++) {
            let trials = 100;
            let totalRuns = 0;
    
            if (this.isPitcher(Players[b])) {    
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

            Players[b]["avgGameRuns"] = averageGameRuns.toFixed(1);
            goodCards = [...goodCards, Players[b]];
            this.setState({
                ...this.state,
                cards: goodCards,
            });
    
            // Against 1565 PM
            // 1295,Barry Bonds,14,910,7.83
            // 1545,Jeff Bagwell '94,14,800,7.40
            // 3460,Barry Bonds,16,900,12.73
            // 3589,Barry Bonds,14,860,8.09
        }
    }

    randomHitters() {
        let randomHitters = [];
        let lineup = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
        let c = 0;

        while (!this.lineupFull(lineup)) {
            c++;
            let i = RandomPositiveInteger(Players.length-1);
            let player = Players[i];
            if (this.isPitcher(player)) {    
                continue;
            }

            // Determine if our lineup has this all of this player's
            // positions filled
            for (let l=0; l<lineup.length; l++) {
                // TODO: Need to allow for any position in the DH spot
                if ((player.Positions[l] >= 0) && (lineup[l] == 0)) {
                    lineup[l] = player.ID;

                    player.Pos = this.positions(player.Positions).join(' | ');;

                    randomHitters = [...randomHitters, player];
                    this.setState({
                        ...this.state,
                        cards: randomHitters,
                    });
                    continue;
                }
            }
        }
    }

    lineupFull(lineup) {
        for (let l=0; l < lineup.length; l++) {
            if (lineup[l] == 0) {
                return false;
            }
        }
        return true;
    }

    render() {
        return(
            <div className="playerCardContainer">
                {this.state.cards.map( (c,i) => { 
                    return(
                        <PlayerCard key={i}
                        name={ c["Name"] }
                        obc={ c["OB/C"] }
                        points={ c["Pts."] }
                        positions={ c["Positions"] }
                        pos={ c["Pos"]}
                        avgGameRuns={ c["avgGameRuns"] } />
                    )
                })}
            </div>
        );
    }
}

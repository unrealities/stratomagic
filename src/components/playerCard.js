import { Roster } from '../app/game.js';
import { halfInning } from '../app/inning.js';
import { RandomPositiveInteger, RandomNonNegativeInteger } from '../lib/math.js';
import { Players, PlayersByPosition } from '../data/players.js';

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
                <div className="avgGameRuns">{this.props.avgGameRuns}</div>
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
        this.randomRoster();
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

            Players[b].avgGameRuns = averageGameRuns.toFixed(1);
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

    // TODO: Split out starting pitchers to ensure you always get 4
    randomRoster() {
        let randomRoster = [];
        let r = new Roster(randomRoster);
        let pbp = PlayersByPosition();

        for(let i=0; i<1; i++) {
            // Get Exactly 4 SPs
            for(let p=0; p<4; p++) {
                let i = RandomPositiveInteger(pbp[1].length-1);
                let player = pbp[1][i];
                player.Pos = this.positions(player.positions).join(' | ');;
                randomRoster = [...randomRoster, player];
            }

            // Get At Least 1 C
            let i = RandomPositiveInteger(pbp[2].length-1);
            let player = pbp[2][i];
            player.Pos = this.positions(player.positions).join(' | ');;
            randomRoster = [...randomRoster, player];

            // Get 20 other players (besides SPs)
            for(let c=0; c<20; c++) {
                let nonSP = null;
                while (nonSP === null) {
                    let i = 1;
                    while (i==1) {
                     i = RandomNonNegativeInteger(12);
                    }
                    let j = RandomPositiveInteger(pbp[i].length-1);
                    nonSP =  pbp[i][j];
                }
                nonSP.Pos = this.positions(nonSP.positions).join(' | ');;

                randomRoster = [...randomRoster, nonSP];
            }
            r = new Roster(randomRoster);
            console.log(r.isValid());
            if (r.isValid()) {
                console.log(`found valid roster`);
                break;
            }
        }

        this.setState({
            ...this.state,
            cards: randomRoster,
        });
    }

    render() {
        return(
            <div className="playerCardContainer">
                <div className="playerCardWrapper">
                    {this.state.cards.map( (c,i) => { 
                        return(
                            <PlayerCard key={i}
                            name={ c.fullName }
                            obc={ c.obc }
                            points={ c.points }
                            positions={ c.playablePositions }
                            pos={ c.Pos}
                            avgGameRuns={ c.runsPerGame(PlayersByPosition()[1][150]) } />
                        )
                    })}
                </div>
            </div>
        );
    }
}

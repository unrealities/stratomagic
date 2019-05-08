import { Roster } from '../app/game';
import { RandomPositiveInteger, RandomNonNegativeInteger } from '../lib/math';
import { PlayersByPosition } from '../data/players';
import { bestHitters } from '../scripts/bestHitters';

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
        let basicPitcher = PlayersByPosition()[1][656]; // Bronson Arroyo
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
                            avgGameRuns={ c.runsPerGame(basicPitcher) } />
                        )
                    })}
                </div>
            </div>
        );
    }
}

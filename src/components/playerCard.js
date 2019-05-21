import { randomRoster } from '../app/roster';
import { PlayersByPosition } from '../data/players';
import { newSimulation } from '../app/simulation';

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
        newSimulation();
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            cards: randomRoster(),
        });
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

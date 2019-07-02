
import { newSimulation } from '../app/simulation';

import React from 'react';

import style from "../style/index.css";

export class LineupCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lineupCard">
                <h1>{this.props.name}</h1>
                <div className="pos">{this.props.pos}</div>
                <div className="onBase">{this.props.obc}</div>
                <div className="points">{this.props.points}</div>
                <div className="avgGameRuns">{this.props.avgGameRuns}</div>
            </div>
        );
    }
}

export class LineupCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            cards: this.props.lineup.battingOrder,
        });
    }

    render() {
        return(
            <div className="lineupCardContainer">
                <div className="lineupCardWrapper">
                    {this.state.cards.map( (c,i) => { 
                        return(
                            <LineupCard key={i}
                            name={ c.fullName }
                            obc={ c.obc }
                            points={ c.points }
                            positions={ c.playablePositions }
                            pos={ c.Pos} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

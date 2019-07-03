import React from 'react';

import style from "../style/index.css";

export class LineupCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lineupCard">
                <div className="num">{this.props.num}</div>
                <div className="name">{this.props.name}</div>
                <div className="onBase">{this.props.obc}</div>
                <div className="points">{this.props.points}</div>
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
                            num={ i+1 }
                            obc={ c.obc }
                            points={ c.points }/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

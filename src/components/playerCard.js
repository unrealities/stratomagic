import React from 'react';

export class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="playerCard">
                <h1>{this.props.name}</h1>
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
        this.state = { cards: [] };
    }

    addCard(newCard) {
        const cards = this.state.cards;
        const newCards = [...cards, newCard];
        this.setState({ cards: newCards });
    }

    render() {
        return(
            <div className="playerCardContainer">
                {this.state.cards.map((c, i) => 
                    <PlayerCard key={i}
                    name={ t.name }
                    obc={ t.obc }
                    points={ t.points }
                    avgGameRuns={ t.avgGameRuns } />)
                }
            </div>
        );
    }
}

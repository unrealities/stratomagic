import React from 'react';

export class ScoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scoreCard">
                <div className="awayScore">{this.props.game.gameState.awayScore}</div>
                <div className="homeScore">{this.props.game.gameState.homeScore}</div>
            </div>
        );
    }
}

export class ScoreCardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            cards: this.props.game,
        });
    }

    render() {
        return(
            <div className="scoreCardContainer">
                <ScoreCard key={0} game={this.props.game}/>
            </div>
        );
    }
}

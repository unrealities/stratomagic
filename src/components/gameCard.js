import { AtBatCardContainer } from '../components/atBatCard.js';
import { BattingBoxScoreCardContainer, PitchingBoxScoreCardContainer } from '../components/boxScoreCard.js';
import { LineupCardContainer } from '../components/lineupCard.js';
import { ScoreCardContainer } from '../components/scoreCard.js';

import React from 'react';

export class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {game: this.props.game};
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            game: this.props.game,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.game !== this.props.game) {
            this.setState({
                ...this.state,
                game: this.props.game,
            });
        }
    }

    render() {
        return (
            <div className="gameCard">
                <div className="battingOrders">
                    <div className="battingOrder">
                        <div className="battingOrderHeading">Away Lineup</div>
                        <div id="awayBattingOrder"><LineupCardContainer lineup={this.props.game.aLineup}/></div>
                    </div>
                    <div className="battingOrder">
                        <div className="battingOrderHeading">Home Lineup</div>
                        <div id="homeBattingOrder"><LineupCardContainer lineup={this.props.game.hLineup}/></div>
                    </div>
                </div>
                <div className="boxScores">
                    <div className="awayBoxScore">
                        <div className="boxScoreHeading">Away Box</div>
                        <div id="awayBattingBoxScore"><BattingBoxScoreCardContainer boxScore={this.props.game.boxScore.aBatters}/></div>
                        <div id="awayPitchingBoxScore"><PitchingBoxScoreCardContainer boxScore={this.props.game.boxScore.aPitchers}/></div>
                    </div>
                    <div className="homeBoxScore">
                        <div className="boxScoreHeading">Home Box</div>
                        <div id="homeBattingBoxScore"><BattingBoxScoreCardContainer boxScore={this.props.game.boxScore.hBatters}/></div>
                        <div id="homePitchingBoxScore"><PitchingBoxScoreCardContainer boxScore={this.props.game.boxScore.hPitchers}/></div>
                    </div>
                </div>
                <div className="score">
                    <div className="scoreHeading">Score</div>
                    <ScoreCardContainer game={this.props.game}/>
                </div>
                <div className="atBats">
                    <div className="atBatsHeading">At Bats</div>
                    <div id="awayBattingOrder"><AtBatCardContainer atBats={this.props.game.atBats}/></div>
                </div>
            </div>
        )
    }
}

import { BattingBoxScoreCardContainer, PitchingBoxScoreCardContainer } from '../components/boxScoreCard.js';

import React from 'react';

export class SeasonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {season: this.props.season};
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            season: this.props.season,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.season !== this.props.season) {
            this.setState({
                ...this.state,
                season: this.props.season,
            });
        }
      }

    render() {
        return (
            <div className="seasonCard">
                <div className="stats">
                    <div className="pitchingStats">
                        <div className="pitchingStatsHeading">Pitching Stats</div>
                        {/* <div id="pitchingStatsContainer"><PitchingStatsCardContainer stats={this.props.season.pitchingStats}/></div> */}
                    </div>
                    <div className="battingStats">
                        <div className="battingStatsHeading">Batting Stats</div>
                        {/* <div id="battingStatsContainer"><BattingStatsCardContainer stats={this.props.season.battingStats}/></div> */}
                    </div>
                </div>
            </div>
        )
    }
}

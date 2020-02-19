import React from 'react';
import { HitterChartCard } from '../components/hitterChartCard.js';

export class BattingBoxScoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="battingBoxScoreCard">
                <div className="name">
                    <div className="playerName">{this.props.name}</div>
                    <HitterChartCard chart={this.props.chart}/>
                </div>
                <div className="pa">{this.props.pa}</div>
                <div className="ab">{this.props.ab}</div>
                <div className="run">{this.props.run}</div>
                <div className="hit">{this.props.hit}</div>
                <div className="bb">{this.props.bb}</div>
                <div className="rbi">{this.props.rbi}</div>
                <div className="tb">{this.props.tb}</div>
                <div className="teamWin">{this.props.teamWin}</div>
                {/* <div className="so">{this.props.so}</div> */}
                {/* <div className="lob">{this.props.lob}</div> */}
                {/* <div className="obp">{this.props.obp}</div> */}
                <div className="ops">{this.props.ops}</div>
            </div>
        );
    }
}

export class PitchingBoxScoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pitchingBoxScoreCard">
                <div className="name">
                    <div className="playerName">{this.props.name}</div>
                    <HitterChartCard chart={this.props.chart}/>
                </div>
                <div className="inn">{this.props.inn}</div>
                <div className="hit">{this.props.hit}</div>
                <div className="run">{this.props.run}</div>
                <div className="bb">{this.props.bb}</div>
                <div className="hr">{this.props.hr}</div>
                <div className="tb">{this.props.tb}</div>
                <div className="so">{this.props.so}</div>
                <div className="teamWin">{this.props.teamWin}</div>
            </div>
        );
    }
}

export class BattingBoxScoreCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        let players = Object.values(this.props.boxScore);

        let header = {'player': {'fullName': 'Batter Name', 'chart': []}, 'pa': 'PA', 'ab': 'AB', 'run': 'R', 'hit': 'H', 'bb': 'BB', 'rbi': 'RBI', 'tb': 'TB', 'teamWin': 'W', 'lob': 'LOB'};
        players.unshift(header);
        this.setState({
            ...this.state,
            cards: players,
        });
    }

    render() {
        return(
            <div className="battingBoxScoreCardContainer">
                <div className="battingBoxScoreCardWrapper">
                    {this.state.cards.map( (c,i) => {
                        if (c.pa > 0 || c.pa == "PA") {
                            return(
                                <BattingBoxScoreCard key={i}
                                chart={ c.player.chart }
                                name={ c.player.fullName }
                                pa={ c.pa }
                                ab={ c.ab }
                                run={ c.run }
                                hit={ c.hit }
                                bb={ c.bb }
                                rbi={ c.rbi }
                                tb={ c.tb }
                                so={ c.so }
                                lob={ c.lob }
                                teamWin={ c.teamWin } />
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export class PitchingBoxScoreCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        let players = Object.values(this.props.boxScore);

        let header = {'player': {'fullName': 'Pitcher Name', 'chart': []}, 'inn': 'INN', 'run': 'ER', 'hit': 'H', 'bb': 'BB', 'hr': 'HR', 'tb': 'TB', 'so': 'K', 'teamWin': 'W'};
        players.unshift(header);
        this.setState({
            ...this.state,
            cards: players,
        });
    }

    render() {
        return(
            <div className="pitchingBoxScoreCardContainer">
                <div className="pitchingBoxScoreCardWrapper">
                    {this.state.cards.map( (c,i) => {
                        if (c.inn > 0 || c.inn == "INN") {
                            return(
                                <PitchingBoxScoreCard key={i}
                                chart={ c.player.chart }
                                name={ c.player.fullName }
                                inn={ c.inn }
                                run={ c.run }
                                hit={ c.hit }
                                bb={ c.bb }
                                hr={ c.hr }
                                tb={ c.tb }
                                so={ c.so }
                                teamWin={ c.teamWin } />
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

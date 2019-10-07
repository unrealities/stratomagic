// Need to be able to display live game
// Put defensive players on the field and offensive players on the bases
import React from 'react';
// import {BattingBoxScoreCardContainer} from '../components/boxScoreCard.js';
import { HitterChartCard } from '../components/hitterChartCard.js';

export class FieldCard extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            game: this.props.game,
            boxScore: this.props.boxScore
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.game !== this.props.game) {
            this.setState({
                ...this.state,
                game: this.props.game,
                boxScore: this.props.boxScore
            });
        }
    }

    buttonClick(){
        this.props.game.PlayAtBat();
        this.setState({
            ...this.state,
            game: this.props.game,
            boxScore: this.props.boxScore
        });
    }

    render() {
        return (
            <div className="fieldCard">
                <ScoreboardCard game={this.props.game}/>
                <OffenseCard offense={this.props.game.offense}/>
                <DefenseCard defense={this.props.game.defense}/>
                <BattingBoxScoreCardContainer boxScore={this.props.boxScore.hBatters}/>
                <button onClick={this.buttonClick}>Play At Bat</button>
            </div>
        );
    }
}

export class OffenseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="offenseCard">
                <div className="batter"><PlayerCard player={this.props.offense.batter}/></div>
                <div className="onDeck"><PlayerCard player={this.props.offense.onDeck}/></div>
                <div className="theHole"><PlayerCard player={this.props.offense.theHole}/></div>
                <div className="firstBaseRunner"><PlayerCard player={this.props.offense.baseRunners[0]}/></div>
                <div className="secondBaseRunner"><PlayerCard player={this.props.offense.baseRunners[1]}/></div>
                <div className="thirdBaseRunner"><PlayerCard player={this.props.offense.baseRunners[2]}/></div>
            </div>
        )
    }
}

export class DefenseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="defenseCard">
                <div className="pitcher"><PlayerCard player={this.props.defense.pitcher}/></div>
                <div className="catcher"><PlayerCard player={this.props.defense.catcher}/></div>
                <div className="firstBase"><PlayerCard player={this.props.defense.firstBase}/></div>
                <div className="secondBase"><PlayerCard player={this.props.defense.secondBase}/></div>
                <div className="thirdBase"><PlayerCard player={this.props.defense.thirdBase}/></div>
                <div className="shortstop"><PlayerCard player={this.props.defense.shortstop}/></div>
                <div className="leftField"><PlayerCard player={this.props.defense.leftField}/></div>
                <div className="centerField"><PlayerCard player={this.props.defense.centerField}/></div>
                <div className="rightField"><PlayerCard player={this.props.defense.rightField}/></div>
            </div>
        )
    }
}

export class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fieldPlayerCard">
                <div className="fullName">{this.props.player == null ? "" : this.props.player.fullName}</div>
                <div className="obc">{this.props.player == null ? "" : this.props.player.obc}</div>   
            </div>
        )
    }
}

export class ScoreboardCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scoreboardCard">
                <div className="sbDiv">
                    <div className="sbHeader">Inning</div>
                    <div className="sbValue">{this.props.game.inning}</div>
                </div>
                <div className="sbDiv">
                    <div className="sbHeader">Outs</div>
                    <div className="sbValue">{this.props.game.outs}</div>
                </div>
                <div className="sbDiv">
                    <div className="sbHeader">Away</div>
                    <div className="sbValue">{this.props.game.awayScore}</div>
                </div>
                <div className="sbDiv">
                    <div className="sbHeader">Home</div>
                    <div className="sbValue">{this.props.game.homeScore}</div>
                </div>
            </div>
        )
    }
}

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
                <div className="so">{this.props.so}</div>
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
        players = players.filter( function(player) {
            return player.pa > 0;
        });

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
        players = players.filter( function(player) {
            return player.inn > 0;
        });

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
                    })}
                </div>
            </div>
        );
    }
}


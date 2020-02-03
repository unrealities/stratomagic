// Need to be able to display live game
// Put defensive players on the field and offensive players on the bases
import React from 'react';
import Select from 'react-select';
// import {BattingBoxScoreCardContainer} from '../components/boxScoreCard.js';
import { HitterChartCard } from '../components/hitterChartCard.js';
import Batter from '../style/batter.svg';
import Pitcher from '../style/pitcher.svg';

export class FieldCard extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            game: this.props.game
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.game !== this.props.game) {
            this.setState({
                ...this.state,
                game: this.props.game
            });
        }
    }

    buttonClick(){
        this.props.game.PlayAtBat();
        this.setState({
            ...this.state,
            game: this.props.game
        });
    }

    render() {
        return (
            <div className="fieldCard">
                <ScoreboardCard game={this.props.game}/>
                <LastPlayCard game={this.props.game}/>
                <div className="action">
                    <OffenseCard offense={this.props.game.offense}/>
                    <div className="park">
                        <div className="infield-dirt"></div>
                        <div className="infield-grass"></div>
                        <div className="infield-pitchers-mound"></div>
                        <div className="outfield-grass"></div>
                        <div className="field-bases">
                            <BaseCard name="first" player={this.props.game.offense.baseRunners[0]}/>
                            <BaseCard name="second" player={this.props.game.offense.baseRunners[1]}/>
                            <BaseCard name="third" player={this.props.game.offense.baseRunners[2]}/>
                            <BaseCard name="home" player={this.props.game.offense.batter}/>
                        </div>
                        <div className="defense-positions">
                            <PositionCard name="pitcher" player={this.props.game.defense.pitcher}/>
                            <PositionCard name="catcher" player={this.props.game.defense.catcher}/>
                            <PositionCard name="firstBase" player={this.props.game.defense.firstBase}/>
                            <PositionCard name="secondBase" player={this.props.game.defense.secondBase}/>
                            <PositionCard name="thirdBase" player={this.props.game.defense.thirdBase}/>
                            <PositionCard name="shortstop" player={this.props.game.defense.shortstop}/>
                            <PositionCard name="leftField" player={this.props.game.defense.leftField}/>
                            <PositionCard name="centerField" player={this.props.game.defense.centerField}/>
                            <PositionCard name="rightField" player={this.props.game.defense.rightField}/>
                        </div>
                    </div>
                    <div className="pitcherCard">
                        <div className="pitcher"><PlayerCard player={this.props.game.defense.pitcher} type="pitcher"/></div>
                    </div>
                </div>
                <div className="playAtBatButton">
                    <button onClick={this.buttonClick}>Play At Bat</button>
                </div>
                <div className="boxScores">
                    <div className="awayBoxScore">
                        <div className="boxScoreHeading">Away Box</div>
                        <div id="awayBattingBoxScore"><BattingBoxScoreCardContainer boxScore={this.props.game.aBatters}/></div>
                        <div id="awayPitchingBoxScore"><PitchingBoxScoreCardContainer boxScore={this.props.game.aPitchers}/></div>
                    </div>
                    <div className="homeBoxScore">
                        <div className="boxScoreHeading">Home Box</div>
                        <div id="homeBattingBoxScore"><BattingBoxScoreCardContainer boxScore={this.props.game.hBatters}/></div>
                        <div id="homePitchingBoxScore"><PitchingBoxScoreCardContainer boxScore={this.props.game.hPitchers}/></div>
                    </div>
                </div>
                <div className="player-selects">
                    <div className="player-select batters">
                        <PlayerSelectContainer players={this.props.game.batters} type="batter"/>
                    </div>
                    <div className="player-select pitchers">
                        <PlayerSelectContainer players={this.props.game.pitchers} type="pitcher"/>
                    </div>
                </div>
            </div>
        );
    }
}

export class OffenseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    // TODO: Need to track batting orders and make sure right players are batting
    render() {
        return (
            <div className="offenseCard">
                <div className="hitters">
                    <div className="batter"><PlayerCard player={this.props.offense.batter} type="batter"/></div>
                    <div className="onDeck"><MiniPlayerCard player={this.props.offense.onDeck} type="batter"/></div>
                    <div className="theHole"><MiniPlayerCard player={this.props.offense.theHole} type="batter"/></div>
                    <div className="battingOrder"><BattingOrderCard battingOrder={this.props.offense.battingOrder}/></div>
                </div>
            </div>
        )
    }
}

export class BaseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.occupied = this.props.player != null && this.props.player.fullName != null && this.props.player.fullName.length > 0;
        this.occupiedClass = this.occupied ? 'occupied':'';
        this.name = this.occupied ? this.props.player.fullName:'';
        this.obc = this.occupied ? this.props.player.obc:'';
        return (
            <div className="field-base-container">
                <div className={`${this.props.name}-base ${this.occupiedClass}`}>
                    <MiniPlayerCard player={this.props.player} type="batter"/>
                </div>
            </div>
        )
    }
}

export class PositionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="field-position-container">
                <div className={`pos-${this.props.name}`}>
                    <div className="pos-player-desc">
                        <div className="pos-player-name">{this.props.player.fullName}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export class BattingOrderCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="battingOrder-container">
                {this.props.battingOrder.map( (b,i) => {
                    return(
                        <div key={i}>{b.fullName}</div>
                    )
                })}
            </div>
        )
    }
}

export class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image;
        let posStrArr = ['DH','SP','C','1B','2B','3B','SS','LF','CF','RF','RP','CL'];
        let fillColor = "#011627"; 
        if (this.props.player != null) {
            fillColor = this.props.player.color;
        }

        if (this.props.type == "batter") {
            image = <Batter className={this.props.type} fill={fillColor} height={"110%"} width={"100%"}/>;
        } else {
            image = <Pitcher className={this.props.type} fill={fillColor} height={"200%"} width={"200%"}/>
        }
        return (
            <div className={`fieldPlayerCard ${
                  this.props.player != null &&
                  this.props.player.fullName != null &&
                  this.props.player.fullName.length > 0 ? 'occupied':''}`}>
                <div className="fullName">{this.props.player == null ? "" : this.props.player.fullName}</div>
                <div className="obc">
                    <div>{this.props.player == null ? "" : this.props.player.obc}</div>
                </div>
                <div className="pos">
                    <div>{this.props.player == null ? "" : posStrArr[this.props.player.playablePositions[0]]}</div>
                </div>
                <div className="player-img">
                    {image}
                </div>
                <PlayerCardChart chart={this.props.player == null ? "" : this.props.player.chart} />
            </div>
        )
    }
}

export class MiniPlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image;
        let posStrArr = ['DH','SP','C','1B','2B','3B','SS','LF','CF','RF','RP','CL'];

        if (this.props.type == "batter") {
            image = <Batter className={this.props.type} fill="#011627" height={"110%"} width={"100%"}/>;
        } else {
            image = <Pitcher className={this.props.type} fill="#011627" height={"200%"} width={"200%"}/>
        }
        return (
            <div className={`fieldMiniPlayerCard ${
                  this.props.player != null &&
                  this.props.player.fullName != null &&
                  this.props.player.fullName.length > 0 ? 'occupied':''}`}>
                <div className="fullName">{this.props.player == null ? "" : this.props.player.fullName}</div>
                <div className="mini-obc">
                    <div>{this.props.player == null ? "" : this.props.player.obc}</div>
                </div>
                <div className="mini-pos">
                    <div>{this.props.player == null ? "" : this.props.player.playablePositions == null ? "" : posStrArr[this.props.player.playablePositions[0]]}</div>
                </div>
            </div>
        )
    }
}

export class PlayerCardChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!Array.isArray(this.props.chart)) {
            return "";
        }
        let newChart = [];
        this.props.chart.forEach((outcome, index) => {
            if (outcome in newChart) {
                newChart[outcome][1] = index;
            }
            else {
                newChart[outcome] = [index,index];
            }
        });

        let chartValues= [];
        for (const chart of Object.entries(newChart)) {
            chartValues.push(chart);
        }
        
        return (
            <div className="playerChartCard"> 
            {
                chartValues.map((cv, i) => {
                    return (
                        <div className="playerChartContainer" key={i}>
                            <div className="playerCharCardHeader">{ cv[0] }</div>
                            <div className="playerChartCardValue">{`${cv[1][0]}-${cv[1][1]}`}</div>
                        </div>
                    );
                })
            } 
            </div>
        );
    }
}

export class LastPlayCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lastAtBat = this.props.game.atBats.slice(-1)[0];
        return (
            <div className="lastPlay">
                {lastAtBat == null ? "game has not started" : `${lastAtBat.pitcher.fullName} vs. ${lastAtBat.batter.fullName} : ${lastAtBat.resultingPlay}`}
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
                    <div className="sbHeader">Inn</div>
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

export class PlayerSelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players:[]};
        this.onSelectChanged = this.onSelectChanged.bind(this);
    }

    componentDidMount(){
        let players = Object.values(this.props.players);

        this.setState({
            ...this.state,
            players: players,
            playerSelect: players[0].player,
        });
    }

    onSelectChanged(index) {
        this.setState({
            ...this.state,
            playerSelect: this.state.players[index].player,    
        });
    }

    render(){
        return (
            <div className="drop-down">
                <Select options={this.state.players.map((opt,i) => ({ label: opt.player.fullName, value: i }))}
                        onChange={(opt) => this.onSelectChanged(opt.value)}
                        styles={{menu: provided => ({ ...provided, zIndex: 9999 })}}/>
                <div className="selected-player">
                    <PlayerCard player={this.state.playerSelect} type={this.props.type}/>
                </div>
            </div>
        );
    }
}

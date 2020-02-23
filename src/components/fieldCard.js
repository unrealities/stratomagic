// Need to be able to display live game
// Put defensive players on the field and offensive players on the bases
import React from 'react';
import {BattingBoxScoreCardContainer, PitchingBoxScoreCardContainer} from '../components/boxScoreCard';
import {PlayerCard, MiniPlayerCard, PlayerSelectContainer} from '../components/playerCard';
import {ScoreboardCard} from '../components/scoreCard';

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
                        <div className="boxScoreHeading away">Away Box</div>
                        <div id="awayBattingBoxScore"><BattingBoxScoreCardContainer boxScore={this.props.game.aBatters}/></div>
                        <div id="awayPitchingBoxScore"><PitchingBoxScoreCardContainer boxScore={this.props.game.aPitchers}/></div>
                    </div>
                    <div className="homeBoxScore">
                        <div className="boxScoreHeading home">Home Box</div>
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

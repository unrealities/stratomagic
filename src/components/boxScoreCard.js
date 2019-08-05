import React from 'react';

export class BattingBoxScoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="battingBoxScoreCard">
                <div className="name">{this.props.name}</div>
                <div className="pa">{this.props.pa}</div>
                <div className="ab">{this.props.ab}</div>
                <div className="run">{this.props.run}</div>
                <div className="hit">{this.props.hit}</div>
                <div className="bb">{this.props.bb}</div>
                <div className="rbi">{this.props.rbi}</div>
                <div className="tb">{this.props.tb}</div>
                <div className="so">{this.props.so}</div>
                {/* <div className="lob">{this.props.lob}</div> */}
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
                <div className="name">{this.props.name}</div>
                <div className="inn">{this.props.inn}</div>
                <div className="hit">{this.props.hit}</div>
                <div className="run">{this.props.run}</div>
                <div className="bb">{this.props.bb}</div>
                <div className="so">{this.props.so}</div>
                <div className="hr">{this.props.hr}</div>
                <div className="tb">{this.props.tb}</div>
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

        let header = {'player': {'fullName': 'Batter Name'}, 'pa': 'PA', 'ab': 'AB', 'run': 'R', 'hit': 'H', 'bb': 'BB', 'rbi': 'RBI', 'tb': 'TB', 'so': 'K', 'lob': 'LOB'};
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
                            name={ c.player.fullName }
                            pa={ c.pa }
                            ab={ c.ab }
                            run={ c.run }
                            hit={ c.hit }
                            bb={ c.bb }
                            rbi={ c.rbi }
                            tb={ c.tb }
                            so={ c.so }
                            lob={ c.lob } />
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

        let header = {'player': {'fullName': 'Pitcher Name'}, 'inn': 'INN', 'run': 'ER', 'hit': 'H', 'bb': 'BB', 'hr': 'HR', 'tb': 'TB', 'so': 'K'};
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
                            name={ c.player.fullName }
                            inn={ c.inn }
                            run={ c.run }
                            hit={ c.hit }
                            bb={ c.bb }
                            hr={ c.hr }
                            tb={ c.tb }
                            so={ c.so } />
                        )
                    })}
                </div>
            </div>
        );
    }
}

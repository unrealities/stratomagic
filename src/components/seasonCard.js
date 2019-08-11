import { BattingBoxScoreCard, PitchingBoxScoreCard } from '../components/boxScoreCard.js';

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
                        <div id="pitchingStatsContainer"><PitchingStatsCardContainer stats={this.props.season.pitchingStats}/></div>
                    </div>
                    <div className="battingStats">
                        <div className="battingStatsHeading">Batting Stats</div>
                        <div id="battingStatsContainer"><BattingStatsCardContainer stats={this.props.season.battingStats}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

// TODO: Each team should have it's own boxScore shown
export class BattingStatsCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        let players = [];
        for (let p of Object.values(this.props.stats)) {
            for (let bs of Object.values(p)) {
                if (bs.pa > 0) {
                    players.push(bs);
                }
            }
        }

        // sort by OPS descending
        players.sort(function(a, b) {
            var nameA = a.ops;
            var nameB = b.ops;
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });

        let header = {'player': {'fullName': 'Batter Name', 'id': 'ID', 'obc': 'OBC', 'chart': 'Chart'}, 'pa': 'PA', 'ab': 'AB', 'run': 'R', 'hit': 'H', 'bb': 'BB', 'rbi': 'RBI', 'tb': 'TB', 'so': 'K', 'lob': 'LOB', 'ops': 'OPS'};
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
                            name={`${c.player.fullName}[${c.player.id}](${c.player.obc}) ${c.player.chart}`}
                            pa={ c.pa }
                            ab={ c.ab }
                            run={ c.run }
                            hit={ c.hit }
                            bb={ c.bb }
                            rbi={ c.rbi }
                            tb={ c.tb }
                            so={ c.so }
                            lob={ c.lob }
                            obp={ c.obp }
                            ops={ c.ops } />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export class PitchingStatsCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        let players = [];
        for (let p of Object.values(this.props.stats)) {
            for (let bs of Object.values(p)) {
                if (bs.inn > 0) {
                    players.push(bs);
                }
            }
        }

        let header = {'player': {'fullName': 'Batter Name', 'id': 'ID', 'obc': 'OBC', 'chart': 'Chart'}, 'inn': 'INN', 'run': 'ER', 'hit': 'H', 'bb': 'BB', 'hr': 'HR', 'tb': 'TB', 'so': 'K'};
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
                            name={`${c.player.fullName}[${c.player.id}](${c.player.obc}) ${c.player.chart}`}
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

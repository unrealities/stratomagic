import { Players } from '../data/players.js';
import { halfInning } from '../app/inning.js';
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
        this.state = {cards:[]};
    }

    componentDidMount(){
        let goodCards = [];

        // TODO: Update DOM async?
        for (let b=0; b<Players.length-1; b++) {
            let trials = 10000;
            let totalRuns = 0;
    
            if (this.isPitcher(Players[b])) {    
                continue;
            }
            for (let i=0; i<trials; i++){
                let hi = halfInning(Players[b], Players[1565]);
                totalRuns += hi["runs"];
            }
            let averageGameRuns = 9 * (totalRuns/trials);
    
            // slowdown appears to occur on the ammount of data being displayed
            // since we're just interested in the best performing players, created
            // a cutoff point
            if (averageGameRuns < 7) {
                continue;
            }

            Players[b]["avgGameRuns"] = averageGameRuns;
            goodCards = [...goodCards, Players[b]];
            this.setState({
                ...this.state,
                cards: goodCards,
            });
    
            // Against 1565 PM
            // 1295,Barry Bonds,14,910,7.83
            // 1545,Jeff Bagwell '94,14,800,7.40
            // 3460,Barry Bonds,16,900,12.73
            // 3589,Barry Bonds,14,860,8.09
        }

        // this.setState({ cards: goodCards });
    }

    // determine if a player is a pitcher or not (a hitter)
    isPitcher(player) {
        for (let i=0; i<player["Positions"].length; i++) {
            // Positions uses standard baseball scoring numbering. With the
            // following modifications: 0: DH, 1: SP, 10: RP, 11: CL
            if (i === 1 || i > 9) {
                if (player["Positions"][i] >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        return(
            <div className="playerCardContainer">
                {this.state.cards.map( (c,i) => { 
                    return(
                        <PlayerCard key={i}
                        name={ c["Name"] }
                        obc={ c["OB/C"] }
                        points={ c["Pts."] }
                        avgGameRuns={ c["avgGameRuns"] } />
                    )
                })}
            </div>
        );
    }
}

// TODO: 
// Need to be able to display live game
// Put defensive players on the field and offensive players on the bases
import React from 'react';

export class FieldCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fieldCard">
                <OffenseCard offense={this.props.offense}/>
                <DefenseCard defense={this.props.defense}/>
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
                <div className="batter">{this.props.offense.batter}</div>
                <div className="onDecker">{this.props.offense.onDeck}</div>
                <div className="theHole">{this.props.offense.onDeck}</div>
                <div className="firstBaseRunner">{this.props.offense.runner1}</div>
                <div className="secondBaseRunner">{this.props.offense.runner2}</div>
                <div className="thirdBaseRunner">{this.props.offense.runner3}</div>
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
                <div className="pitcher">{this.props.defense.players[0]}</div>
                <div className="catcher">{this.props.defense.players[1]}</div>
                <div className="firstBase">{this.props.defense.players[2]}</div>
                <div className="secondBase">{this.props.defense.players[3]}</div>
                <div className="thirdBase">{this.props.defense.players[4]}</div>
                <div className="shortstop">{this.props.defense.players[5]}</div>
                <div className="leftField">{this.props.defense.players[6]}</div>
                <div className="centerField">{this.props.defense.players[7]}</div>
                <div className="rightField">{this.props.defense.players[8]}</div>
            </div>
        )
    }
}

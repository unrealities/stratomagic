// Need to be able to display live game
// Put defensive players on the field and offensive players on the bases
import React from 'react';

export class FieldCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            offense: this.props.offense,
            defense: this.props.defense,
        });
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
                <div className="pitcher">{this.props.defense.pitcher.fullName}</div>
                <div className="catcher">{this.props.defense.catcher.fullName}</div>
                <div className="firstBase">{this.props.defense.firstBase.fullName}</div>
                <div className="secondBase">{this.props.defense.secondBase.fullName}</div>
                <div className="thirdBase">{this.props.defense.thirdBase.fullName}</div>
                <div className="shortstop">{this.props.defense.shortstop.fullName}</div>
                <div className="leftField">{this.props.defense.leftField.fullName}</div>
                <div className="centerField">{this.props.defense.centerField.fullName}</div>
                <div className="rightField">{this.props.defense.rightField.fullName}</div>
            </div>
        )
    }
}

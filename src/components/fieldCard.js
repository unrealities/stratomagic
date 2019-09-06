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
            </div>
        )
    }
}

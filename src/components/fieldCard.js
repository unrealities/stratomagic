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
                <div className="batter"></div>
                <div className="onDecker"></div>
                <div className="firstBaseRunner"></div>
                <div className="secondBaseRunner"></div>
                <div className="thirdBaseRunner"></div>
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
                <div className="pitcher"></div>
                <div className="catcher"></div>
                <div className="firstBase"></div>
                <div className="secondBase"></div>
                <div className="thirdBase"></div>
                <div className="shortstop"></div>
                <div className="leftField"></div>
                <div className="centerField"></div>
                <div className="rightField"></div>
            </div>
        )
    }
}

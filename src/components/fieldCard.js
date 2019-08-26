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
                // TODO DefenseCard
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

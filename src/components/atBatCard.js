import React from 'react';

export class AtBatCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="atBatCard">
                <div className="name">{this.props.atBat.batter.fullName}</div>
                <div className="obc">[{this.props.atBat.batter.obc}]</div>
                <div className="batterVPitcher">v</div>
                <div className="name">{this.props.atBat.pitcher.fullName}</div>
                <div className="obc">[{this.props.atBat.pitcher.obc}]</div>
                <div className="rolls">|{this.props.atBat.controlRoll}, {this.props.atBat.playRoll}|</div>
                <div className="controllingPlayer">{this.props.atBat.controllingPlayer.fullName}</div>
                <div className="resultingPlay">{JSON.stringify(this.props.atBat.resultingPlay}</div>
            </div>
        );
    }
}

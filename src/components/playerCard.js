import React from 'react';
import ReactDOM from 'react-dom';

class PlayerCard extends React.Component {
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

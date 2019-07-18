import React from 'react';

export class AtBatCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="atBatCard">
                <div className="num">{this.props.num}</div>
                <div className="name">{this.props.atBat.batter.fullName}</div>
                <div className="obc">[{this.props.atBat.batter.obc}]</div>
                <div className="name">{this.props.atBat.pitcher.fullName}</div>
                <div className="obc">[{this.props.atBat.pitcher.obc}]</div>
                <div className="rolls">|{this.props.atBat.controlRoll}, {this.props.atBat.playRoll}|</div>
                <div className="name">{this.props.atBat.controllingPlayer.fullName}</div>
                <div className="resultingPlay">{this.props.atBat.resultingPlay}</div>
            </div>
        );
    }
}

export class AtBatCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards:[]};
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            cards: this.props.atBats,
        });
    }

    render() {
        return(
            <div className="atBatCardContainer">
                {this.state.cards.map( (c,i) => { return( <AtBatCard key={i} num={i+1} atBat={c}/>) })}
            </div>
        );
    }
}

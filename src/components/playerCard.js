import React from 'react';
import Select from 'react-select';

import Batter from '../style/batter.svg';
import Pitcher from '../style/pitcher.svg';

export class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image;
        let posStrArr = ['DH','SP','C','1B','2B','3B','SS','LF','CF','RF','RP','CL'];
        let fillColor = "#011627"; 
        if (this.props.player != null) {
            fillColor = this.props.player.color;
        }

        if (this.props.type == "batter") {
            image = <Batter className={this.props.type} fill={fillColor} height={"110%"} width={"100%"}/>;
        } else {
            image = <Pitcher className={this.props.type} fill={fillColor} height={"200%"} width={"200%"}/>
        }
        return (
            <div className={`fieldPlayerCard ${
                  this.props.player != null &&
                  this.props.player.fullName != null &&
                  this.props.player.fullName.length > 0 ? 'occupied':''}`}>
                <div className="fullName">{this.props.player == null ? "" : this.props.player.fullName}</div>
                <div className="obc">
                    <div>{this.props.player == null ? "" : this.props.player.obc}</div>
                </div>
                <div className="pos">
                    <div>{this.props.player == null ? "" : posStrArr[this.props.player.playablePositions[0]]}</div>
                </div>
                <div className="player-img">
                    {image}
                </div>
                <PlayerCardChart chart={this.props.player == null ? "" : this.props.player.chart} />
            </div>
        )
    }
}

export class MiniPlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image;
        let posStrArr = ['DH','SP','C','1B','2B','3B','SS','LF','CF','RF','RP','CL'];

        if (this.props.type == "batter") {
            image = <Batter className={this.props.type} fill="#011627" height={"110%"} width={"100%"}/>;
        } else {
            image = <Pitcher className={this.props.type} fill="#011627" height={"200%"} width={"200%"}/>
        }
        return (
            <div className={`fieldMiniPlayerCard ${
                  this.props.player != null &&
                  this.props.player.fullName != null &&
                  this.props.player.fullName.length > 0 ? 'occupied':''}`}>
                <div className="fullName">{this.props.player == null ? "" : this.props.player.fullName}</div>
                <div className="mini-obc">
                    <div>{this.props.player == null ? "" : this.props.player.obc}</div>
                </div>
                <div className="mini-pos">
                    <div>{this.props.player == null ? "" : this.props.player.playablePositions == null ? "" : posStrArr[this.props.player.playablePositions[0]]}</div>
                </div>
            </div>
        )
    }
}
export class PlayerCardChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!Array.isArray(this.props.chart)) {
            return "";
        }
        let newChart = [];
        this.props.chart.forEach((outcome, index) => {
            if (outcome in newChart) {
                newChart[outcome][1] = index;
            }
            else {
                newChart[outcome] = [index,index];
            }
        });

        let chartValues= [];
        for (const chart of Object.entries(newChart)) {
            if (chart[1][0] === chart[1][1]) {
                chart[1] = chart[1][0];
            } else if (chart[1][1] === 29){
                chart[1] = `${chart[1][0]}+`;
            } else {
                chart[1] = `${chart[1][0]}-${chart[1][1]}`;
            }
            chartValues.push(chart);
        }
        
        return (
            <div className="playerChartCard"> 
            {
                chartValues.map((cv, i) => {
                    return (
                        <div className="playerChartContainer" key={i}>
                            <div className="playerCharCardHeader">{ cv[0] }</div>
                            <div className="playerChartCardValue">{ cv[1] }</div>
                        </div>
                    );
                })
            } 
            </div>
        );
    }
}

export class PlayerSelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {players:[]};
        this.onSelectChanged = this.onSelectChanged.bind(this);
    }

    componentDidMount(){
        let players = Object.values(this.props.players);

        this.setState({
            ...this.state,
            players: players,
            playerSelect: players[0].player,
        });
    }

    onSelectChanged(index) {
        this.setState({
            ...this.state,
            playerSelect: this.state.players[index].player,    
        });
    }

    render(){
        return (
            <div className="drop-down">
                <Select options={this.state.players.map((opt,i) => ({ label: opt.player.fullName, value: i }))}
                        onChange={(opt) => this.onSelectChanged(opt.value)}
                        styles={{menu: provided => ({ ...provided, zIndex: 9999 })}}/>
                <div className="selected-player">
                    <PlayerCard player={this.state.playerSelect} type={this.props.type}/>
                </div>
            </div>
        );
    }
}

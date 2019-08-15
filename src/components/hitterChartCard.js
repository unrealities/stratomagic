import React from 'react';

export class HitterChartCard extends React.Component {
    // TODO: Convert Player Chart to something visually interesting
    // will receive an array like : [SO,SO,GB,FB,FB,FB,BB,BB,BB,BB,BB,BB,1B,1B,2B,2B,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR]
    // convert to XX-|||-----++**!!!!!
    constructor(props) {
        super(props);
        this.state = {chart: []};  
    }

    componentDidMount(){
        let chartToTB = {"PU": 0, "SO": 0, "GB": 0, "FB": 0, "BB": 1, "1B": 1, "1B+": 1, "2B": 2, "3B": 3, "HR": 4};
        let newChart = [];
        if (Array.isArray(newChart)) {
            for( let i=0; i<20; i++ ) {
                newChart[i] = chartToTB[this.props.chart[i]];
            }
        } else {
            newChart = [];
        }

        this.setState({
            ...this.state,
            chart: newChart,
        });
    }

    render() {
        return (
            <div className="hitterChartCard">
                {this.state.chart.map( (c,i) => { 
                    return( <div key={i} className={`hitterChartItem${c} chartItem`} /> )
                })}
            </div>
        );
    }
}

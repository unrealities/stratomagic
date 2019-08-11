import React from 'react';

export class HitterChartCard extends React.Component {
    // TODO: Convert Player Chart to something visually interesting
    // will receive an array like : [SO,SO,GB,FB,FB,FB,BB,BB,BB,BB,BB,BB,1B,1B,2B,2B,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR]
    // convert to XX-|||-----++**!!!!!
    constructor(props) {
        super(props);
        let chartToTB = {"PU": 0, "SO": 0, "GB": 0, "FB": 0, "BB": 1, "1B": 1, "1B+": 1, "2B": 2, "3B": 3, "HR": 4};
        for( let i=0; i<props.chart.length(); i++ ) {
            props.chart[i] = chartToTB[props.chart[i]];
        }
        this.state = {chart: props.chart};
        
    }

    render() {
        return (
            <div className="hitterChartCard">
                // TODO: Make 20 cells that are colored in based on chart value
            </div>
        );
    }
}

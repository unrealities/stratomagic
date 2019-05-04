// Loop through all the players and find the most common pitcher
// This information is valuable to give hitters a baseline performance metric
import { PlayersByPosition } from '../data/players';

// Results
// average points: 321.3730255164034
// average ob: 3.218712029161604
// average ip: 6.262454434993924
// average chart: ["PU","PU","SO","SO","SO","SO","GB","GB","GB","GB","GB","GB","GB","FB","FB","FB","BB","1B","1B","2B","2B","2B","2B","2B","HR","HR","HR","HR","HR","HR"]

export function averagePitcher(){
    let count = PlayersByPosition()[1].length;
    let points = 0;
    let obs = 0;
    let ips = 0;
    let charts = [];
    for(let i=0; i<30; i++) {
        charts[i] = {"PU": 0, "SO": 0, "GB": 0, "FB": 0, "BB": 0, "1B": 0, "1B+": 0, "2B": 0, "3B": 0, "HR": 0};
    }

    for(let player of PlayersByPosition()[1]) {
        points = points + player.points;
        obs = obs + player.obc;
        ips = ips + player.ip;
        for(let i=0; i<30; i++) {
            charts[i][player.chart[i]]++;
        }
    }

    let avgChart = [];
    for(let i=0; i<30; i++) {
        avgChart[i] = {
            "PU": charts[i]["PU"]/count,
            "SO": charts[i]["SO"]/count,
            "GB": charts[i]["GB"]/count,
            "FB": charts[i]["FB"]/count,
            "BB": charts[i]["BB"]/count,
            "1B": charts[i]["1B"]/count,
            "1B+": charts[i]["1B+"]/count,
            "2B": charts[i]["2B"]/count,
            "3B": charts[i]["3B"]/count,
            "HR": charts[i]["HR"]/count,
        }
    }

    let maxChart = []
    for(let i=0; i<30; i++) {
        maxChart[i] = Object.keys(avgChart[i]).reduce((a, b) => avgChart[i][a] > avgChart[i][b] ? a : b);
    }

    console.log(`average points: ${points/count}`);
    console.log(`average ob: ${obs/count}`);
    console.log(`average ip: ${ips/count}`);
    console.log(`average chart: ${JSON.stringify(maxChart)}`);
}

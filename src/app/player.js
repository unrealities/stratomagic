import { halfInning } from '../app/inning.js';

// {
//     "ID": 1,
//     "Year": 2000,
//     "#": 1,
//     "Ed": "1st",
//     "Set": "PR",
//     "Name": "Kent Bottenfield",
//     "Team": "Angels",
//     "Pts.": 330,
//     "OB/C": 3,
//     "Spd/IP": 6,
//     "B/T": "R",
//     "Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//     "Icons": [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//     "Chart": ["SO","SO","SO","SO","PU","PU","PU","GB","GB","GB","GB","GB","FB","FB","FB","FB","BB","1B","1B","2B","2B","2B","2B","2B","2B","2B","2B","2B","2B","2B"]
//   }
export class Player {
    constructor(id, year, setNum, edition, set, fullName, mlbTeam, points, obc, spd_ip, bats, positions, icons, chart){
        this.id = id;
        this.year = year;
        this.setNum = setNum;
        this.edition = edition;
        this.set = set;
        this.fullName = fullName;
        this.mlbTeam = mlbTeam;
        this.points = points;
        this.obc = obc;
        this.bats = bats;
        this.positions = positions;
        this.icons = icons;
        this.chart = chart;

        this.hitter = this.isHitter();
        this.pitcher = !this.hitter;
        this.speed = 10; // pitchers have a default value of 10 speed
        this.ip = 0;     // hitters cannot pitch
        this.hitter ? this.speed = spd_ip : this.ip = spd_ip;
        this.control = this.pitcher ? this.obc : -100 // track a pitcher's control separate of their obc to allow for decrease during the game

        this.playablePositions = this.playablePositions();
    }
    
    isHitter(){
        for(let p=0; p<this.positions.length; p++) {
            if (p === 1 || p > 9) if (this.positions[p] >= 0) return false;
        }
        return true;
    }

    playablePositions(){
        let pp = [];
        for(let p=0; p<this.positions.length; p++) {
            if(this.positions[p] >= 0) pp.push(p);
        }
        return pp;
    }

    runsPerGame(pitcher) {
        let trials = 100000;
        let totalRuns = 0;

        if (this.isHitter() == false) return 0;
        for (let i=0; i<trials; i++){
            let hi = halfInning(this, pitcher);
            totalRuns += hi["runs"];
        }
        return (Math.round((9 * (totalRuns/trials))*10)/10).toFixed(1);
    }

}

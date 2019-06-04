import { halfInning } from '../app/inning.js';
import { GameState } from './gameState.js';
import { AtBat } from './atBat.js';

// Game object to track the game state
// 2 teams ( home v. away ? )
// 2 owners
// 2 rosters
// 2 battling lineups
// 2 starting pitchers
// 2 team point totals ( verify before the game begins the roster is legal )
// DateTime, Id
//
// Game Score ( Home team runs, Away team runs )
// Score per inning >> Total score
// Current inning
// Current baserunners
// Current number of outs
// Current batter
// Current pitcher
//
// Each owner's team is instances of players. There is a finite number of cards
//   and only one of each player can be on each team.
// Need to track stats of each player during a game/series/season. Should be
//   able to show a summary box score after each game.
//
// Predictions? After lineups have been set, show the win probabilities.
//
export class Game {
    constructor(hTeam, aTeam, hLineup, aLineup, dh) {
        this.hTeam = hTeam;
        this.aTeam = aTeam;
        this.hLineup = hLineup;
        this.aLineup = aLineup;
        this.dh = dh;

        this.gameState = new GameState(aLineup, hLineup);
        this.boxScore = new BoxScore(aTeam.roster, hTeam.roster);
    }

    startInning() {
        this.gameState.inning++;
        this.gameState.topHalf = !this.gameState.topHalf;

        // TODO figure out how to avoid this conditional. Schema is not great.
        let batters = this.gameState.boxScore.aBatters;
        let pitchers = this.gameState.boxScore.hPitchers;
        if (!this.gameState.topHalf) {
            batters = this.gameState.boxScore.hBatters;
            pitchers = this.gameState.boxScore.aPitchers;
        }

        let batter = batters[this.gameState.batter];
        let pitcher = pitchers[this.gameState.pitcher];
        
        while (this.gameState.outs < 3) {
            let atBat = new AtBat(this.gameState.batter, this.gameState.pitcher);

            // TODO pull these into functions on BoxScore
            // Could each outcome have a set of other events that need to be updated?
            for (player of [batter, pitcher]) {
                for (event of ['pa', atBat.resultingPlay]) {
                    player[event]++;
                }
            }
    
            if (atBat.determineTotalBases() == 0) {
                for (player of [batter, pitcher]) {
                    player.ab++;
                }
                this.gameState.outs++;
                // TODO handle sac fly and double play situations
                continue;
            }

            // a non-out has occurred and baserunners will need to be modified and scoring may need updating
            // TODO handle trying for extra bases

            // handle existing baserunners, advance them one base each for each totalBase

            // the first three entries are 1st,2nd,3rd. The fourth entry on are runners who scored on the play
            // ex. p4 hits a grandslam: [p1, p2, p3, null, null, null, null] => [null, null, null, p4, p1, p2, p3]
            let afterAtBatBaseRunners = ["", "", "", "", "", "", ""];
            for (let i=this.gameState.baseRunners.length-1; i>=0; i--) {
                afterAtBatBaseRunners[i+bases] = this.gameState.baseRunners[i];
            }
            // Put the batter on their appropriate base
            afterAtBatBaseRunners[bases-1] = this.gameState.batter;

            // Check for baserunners that have scored.
            for (let i=afterAtBatBaseRunners.length-1; i>2; i--) {
                if (afterAtBatBaseRunners[i] !== "") {
                    // TODO update boxscore for runners who scored
                    // TODO update boxscore for RBIs
                    // TODO update pitcher for runs allowed
                    // TODO update batting team's score
                }
            }

            // Reset runners
            for (let i=0; i<this.gameState.baseRunners.length; i++) {
                this.gameState.baseRunners[i] = afterAtBatBaseRunners[i];
            }
        }
    }
}

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
        if (this.hitter) {
            this.speed = spd_ip;
        }
        if (!this.hitter) {
            this.ip = spd_ip;
        }

        this.playablePositions = this.playablePositions();
    }
    
    isHitter(){
        for(let p=0; p<this.positions.length; p++) {
            if (p === 1 || p > 9) {
                if (this.positions[p] >= 0) {
                    return false;
                }
            }
        }
        return true;
    }

    playablePositions(){
        let pp = [];
        for(let p=0; p<this.positions.length; p++) {
            if(this.positions[p] >= 0) {
                pp.push(p);
            }
        }
        return pp;
    }

    runsPerGame(pitcher) {
        let trials = 100000;
        let totalRuns = 0;

        if (!this.isHitter()) {    
            return 0;
        }
        for (let i=0; i<trials; i++){
            let hi = halfInning(this, pitcher);
            totalRuns += hi["runs"];
        }
        return (Math.round((9 * (totalRuns/trials))*10)/10).toFixed(1);
    }

}

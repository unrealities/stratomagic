import { PossibleLineup } from './possibleLineup.js';
import { LineupCombinations } from './lineupCombinations.js';
import { halfInning } from '../app/inning.js';

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
class Game {
    constructor(hTeam, aTeam, hLineup, aLineup, dh) {
        this.hTeam = hTeam;
        this.aTeam = aTeam;
        this.hLineup = hLineup;
        this.aLineup = aLineup;
        this.dh = dh;
    }
}

class Team {
    constructor(name, owner, roster) {
        this.name = name;
        this.owner = owner;
        this.roster = roster;
    }
}

class Owner {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

/*  Roster

Rules taken from: http://www.wizards.com/dci/downloads/MLB_FLR_06may05_EN.doc
TODO: Need to make these rules dynamic.

*/
export class Roster {
    constructor(players) {
        this.players = players;
        this.PossibleLineup = new PossibleLineup(7);
    };

    // Must have exactly (25) players on the roster
    isValidSize(size) {
        if (this.players.length == size) {
            return true;
        }
        return false;
    }

    // Must have exactly (4) starting pitchers
    hasStartingPitchers(count) {
        let c = 0;
        for(let player of this.players) {
            if (player.positions[1] >= 0 ) {
                c++;
            }
        }
        console.log(`${c} starting pitchers`)
        return c === count;
    }


    // 9 non-pitchers in a lineup (DH, C, 1B, 2B, 3B, SS, LF, CF, RF)
    // Any hitter can be a DH
    // Any hitter can be a 1B (get -1 fielding)
    canFieldValidLineup() {
        // The problem is that a player can have multiple positions
        // and they can also always qualify at DH or 1B.
        //
        // We only need to ensure a minimum of one valid lineup, once
        // a valid lineup is found, we can return true.
        let hitters = [];
        for(let player of this.players) {
            for(let p=0; p<player.positions.length; p++) {
                if (p === 1 || p > 9) {
                    if (player.positions[p] >= 0) {
                        break;
                    }
                }
            }
            hitters.push(player);
        }

        // Need at least 9 hitters
        if (hitters.length < 9) {
            console.log("less than 9 hitters");
            return false;
        }

        // Since anyone can play 1B or DH we only need to ensure a unique
        // player can field each of the seven other positions
        let interestingPositions = [2,4,5,6,7,8,9];

        // Ensure we have at least one player that qualifies at each position
        // This does not prevent a player from illegally filling multiple positions
        let interestingLineup = {'2': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': []};
        let usableHitters = [];
        for(let h of hitters) {
            h.activePositions = [];
            // Identify what position each player can play
            for(let p=0; p<h.positions.length; p++) {
                if (h.positions[p] >= 0) {
                    h.activePositions.push(p);
                }
            }

            // Fill in positions for players who can only play one position
            // Also account for players who play LF/RF. Pure LF or RF generally do not exist
            if (h.activePositions.length === 1 && interestingPositions.includes(h.activePositions[0])) {
                if (interestingLineup[h.activePositions[0].toString()] === undefined || 
                interestingLineup[h.activePositions[0].toString()].length == 0) {
                    interestingLineup[h.activePositions[0].toString()] = [h["ID"]];
                }
            } else if (h.activePositions.length === 2 && 
                       h.activePositions[0] === 7 &&
                       h.activePositions[1] === 9){ 
                if (interestingLineup[h.activePositions[0].toString()] === undefined || 
                interestingLineup[h.activePositions[0].toString()].length == 0) {
                    interestingLineup[h.activePositions[0].toString()] = [h["ID"]];
                } else if (interestingLineup[h.activePositions[1].toString()] === undefined || 
                interestingLineup[h.activePositions[1].toString()].length == 0) {
                    interestingLineup[h.activePositions[1].toString()] = [h["ID"]];
                }
            } else {
                for(let a of h.activePositions) {
                    if (interestingPositions.includes(a)) {
                        usableHitters.push(h);
                        break;
                    }
                }
            }
        }

        // TODO: playing with graph search model
        // use hitters
        for(let h of hitters) {
            for(let ap of h.activePositions) {
                if(interestingPositions.includes(ap)) {
                    for(let p=2; p<11; p++) {
                        if(p == 3 || ap == p) {
                            continue;
                        }
                        this.PossibleLineup.addPlayer(ap, p, h["ID"]);
                    }
                }
            }
        }
        this.PossibleLineup.search(2);

        // Determine remaining positions to be filled
        let remainingPositions = [];
        for(let [pos, players] of Object.entries(interestingLineup)) {
            if (players.length == 0) {
                remainingPositions.push(pos);
            }
        }

        // valid roster
        if (remainingPositions.length == 0) {
            return true;
        }

        if ((usableHitters.length == 0 && remainingPositions.length > 0) ||
            (usableHitters.length < remainingPositions.length)) {
            console.log("not enough hitters left");
            return false;
        }
        
        // If there is no simple solution, check all combinations
        let lc = new LineupCombinations(this);
        return (lc.combinations().length > 0  ? true : false);
    }

    // Total points < (5000)
    underSalaryCap(capNumber) {
        let salary = 0;
        for(let player of this.players) {
            salary += player.points;
        }
        console.log(`Salary is ${salary}`)
        return salary <= capNumber;
    }

    isValid() {
        return this.isValidSize(25) &&
        this.underSalaryCap(10000) &&
        this.hasStartingPitchers(4) &&
        this.canFieldValidLineup();     
    }

}

class Lineup {
    constructor(hitters, startingPitcher) {
        this.hitters = hitters;
        this.startingPitcher = startingPitcher;
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
        let trials = 1000;
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

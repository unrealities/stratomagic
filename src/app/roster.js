import { PlayersByPosition } from '../data/players';
import { PossibleLineup } from '../app/possibleLineup';
import { RandomPositiveInteger, RandomNonNegativeInteger } from '../lib/math';
import { LineupCombinations } from '../app/lineupCombinations';

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
        return salary <= capNumber;
    }

    isValid() {
        return this.isValidSize(25) &&
        this.underSalaryCap(10000) &&
        this.hasStartingPitchers(4) &&
        this.canFieldValidLineup();     
    }

}

// TODO: Re-Add string representation of positions
export function randomRoster() {
    let randomRoster = [];
    let r = new Roster(randomRoster);
    let pbp = PlayersByPosition();

    for(let i=0; i<1; i++) {
        // Get Exactly 4 SPs
        for(let p=0; p<4; p++) {
            let i = RandomPositiveInteger(pbp[1].length-1);
            let player = pbp[1][i];
            // player.Pos = this.positions(player.positions).join(' | ');;
            randomRoster = [...randomRoster, player];
        }

        // Get At Least 1 C
        let i = RandomPositiveInteger(pbp[2].length-1);
        let player = pbp[2][i];
        // player.Pos = this.positions(player.positions).join(' | ');;
        randomRoster = [...randomRoster, player];

        // Get 20 other players (besides SPs)
        for(let c=0; c<20; c++) {
            let nonSP = null;
            while (nonSP === null) {
                let i = 1;
                while (i==1) {
                 i = RandomNonNegativeInteger(12);
                }
                let j = RandomPositiveInteger(pbp[i].length-1);
                nonSP =  pbp[i][j];
            }
            // nonSP.Pos = this.positions(nonSP.positions).join(' | ');;

            randomRoster = [...randomRoster, nonSP];
        }
        r = new Roster(randomRoster);
        if (r.isValid()) {
            break;
        }
    }

    return randomRoster;
}

export function RandomValidRoster() {
    let roster = new Roster(randomRoster());

    while (!roster.canFieldValidLineup()) {
        roster = new Roster(randomRoster());
    }
    return roster;
}

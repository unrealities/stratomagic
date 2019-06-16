import { Cartesian } from '../lib/math';

// Brute force attempt to check for all lineup combinations
// To be used when a trivial solution is not available
// This could possibly traverse through all possible combinations of lineups and be extremely inefficient
export class LineupCombinations {
    constructor(roster) {
        this.players = roster.players;
        
        let possiblePositions = [];
        for(let i=0; i<12; i++) {
            possiblePositions[i] = {[i]: []};
        }
        for(let p of this.players) {
            for(let pos of p.playablePositions) {
                possiblePositions[pos][pos].push(p);
            }
        }
        this.possiblePositions = possiblePositions;
    }
    combinations() {
        let combos = Cartesian(this.possiblePositions);

        // TODO: this can generate hundreds of thousands of combinations and take a very long time to iterate
        // combos also includes lineups where the same player fills multiple positions.
        // these need to be invalidated.
        let usedPlayers = [];
        for (let i=combos.length-1; i>=0; i--) {
            console.log(i);
            for (let player of Object.values(combos[i])) {
                if (usedPlayers.includes(player.id)) {
                    combos.splice(i, 1);
                    break;
                }
                usedPlayers.push(player.id);
            }
        }

        return combos;
    }
}

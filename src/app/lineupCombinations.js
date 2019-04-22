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
                possiblePositions[pos][pos].push(p.id);
            }
        }
        this.possiblePositions = possiblePositions;
    }
    combinations() {
        return Cartesian(this.possiblePositions);
    }
}

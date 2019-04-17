import { Cartesian } from '../lib/math';

// Brute force attempt to check for all lineup combinations
// To be used when a trivial solution is not available
// This could possibly traverse through all possible combinations of lineups and be extremely inefficient
export class LineupCombinations {
    constructor(roster) {
        this.players = roster.players;
    }
    combinations() {
        let positions = [];
        for(let i=0; i<11; i++) {
            positions[i] = {[i]: []};
        }
        for(let p of this.players) {
            for(let pos of p.playablePositions) {
                positions[pos][pos].push(p.id);
            }
        }
        return Cartesian(positions);
    }
}

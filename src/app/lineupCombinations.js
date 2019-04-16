import { Cartesian } from '../lib/math';

// Brute force attempt to check for all lineup combinations
// To be used when a trivial solution is not available
// This could possibly traverse through all possible combinations of lineups and be extremely inefficient
export class LineupCombinations {
    constructor(roster) {
        this.roster = roster;
    }
    combinations() {
        let positionMap = new Map();
        for(let i=0; i<11; i++) {
            positionMap.set(i, []);
        }
        this.roster.players.forEach( function(player) {
            player.playablePositions.forEach( function(position) {
                positionMap.get(position).push(player.id);
            });
        });
        return Cartesian(positionMap);
    }
}
